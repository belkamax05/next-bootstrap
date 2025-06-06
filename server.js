require('newrelic');
const express = require('express');
const fs = require('fs');
const myArgs = process.argv.slice(2);
const appName = myArgs[0];
const Cookies = require('cookies');
const { v4: uuidv4 } = require('uuid');
const url = require('url');
const { logAccess } = require('./libs/component-library/src/lib/scripts/accessLogger');
const { logger } = require('./libs/utils/src/service/logger');
const dev = process.env.NODE_ENV !== 'production';

logger(`custom server ${appName}`);

const sendToNewRelic = (newrelic, req, relpath, requestUUID, jSessionId) => {
  // Get the Request IP
  const ipAddr = req?.headers['x-forwarded-for'] || req.socket.remoteAddress;
  if (ipAddr) {
    newrelic.addCustomAttribute('ipAddr', ipAddr);
  }

  if (jSessionId) {
    newrelic.addCustomAttribute('jsessionId', jSessionId);
  }

  if (requestUUID) {
    newrelic.addCustomAttribute('node.requestId', requestUUID);
  }

  if (req.url) {
    newrelic.addCustomAttribute('request.fullUri', req.url);
  }

  // Set the controller name
  if (relpath) {
    const lowerPath = relpath.toLowerCase();

    // Check to see if it was request to /_next
    if (/^\/_next\/(.*)/i.test(lowerPath)) {
      if (/^\/_next\/webpack-hmr(.*)/i.test(lowerPath)) {
        // Local Dev HMR
        // console.log('nextHmr', lowerPath)
        newrelic.setTransactionName('nextHMR');
      } else if (/^\/_next\/image(.*)/i.test(lowerPath)) {
        // Next Images
        // console.log('nextImage', lowerPath)
        newrelic.setTransactionName('nextImage');
      } else if (/\/_next\/data\/(.*)/i.test(lowerPath)) {
        // Data Urls
        // console.log('nextData', lowerPath)
        newrelic.setTransactionName('nextData');
      } else if (/\/_next\/static\/(.*)/i.test(lowerPath)) {
        // Static Files
        // console.log('nextStatic', lowerPath)
        newrelic.setTransactionName('nextStatic');
      } else {
        // Other Next Request
        // console.log('nextOther', lowerPath)
        newrelic.setTransactionName('nextOther');
      }
    } else {
      // It wasn't a request to /_next/*

      if (/.*(\.js|\.ico|\.gif|\.png|\.jpg)/i.test(lowerPath)) {
        // Other Assets (such as favicon, service workers etc)
        // console.log('nextAssets', lowerPath)
        newrelic.setTransactionName('nextAssets');
      } else if (/\/api\/.*/i.test(lowerPath)) {
        // API Requests
        // console.log('nextApi', lowerPath)
        newrelic.setTransactionName('nextApi');
      } else {
        // Page Requests
        // console.log('nextRequest', lowerPath)
        newrelic.setTransactionName(`nextDynamic`);
      }
      return false;
    }
    return false;
  }
  return false;
};

const next = require('next');
const app = next({ dev: false });

const handler = async (req, res, opts, newrelic, t0 = Date.now()) => {
  const handle = app.getRequestHandler();

  if (!dev) {
    // CACHE HEADERS HAVE MOVED TO _app.tsx
    // max age 63072000 is the maximum allowed limit which is 2 years
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('X-Permitted-Cross-Domain-Policies', 'none');
  }
  req.newrelic = newrelic;
  req.requestIdOpts = opts;
  await handle(req, res);
  const t1 = Date.now();
  const totalTimeMs = t1 - t0;
  logAccess(req, res, totalTimeMs, opts.jSessionId);
};

const server = express();

process
  .on('unhandledRejection', (reason, p) => {
    logger(`Unhandled Rejection at Promise - ${reason} - ${p}`, 'E');
  })
  .on('uncaughtException', (err) => {
    logger(`Uncaught Exception thrown - ${err} - ${JSON.stringify(err.stack)}`, 'E');
    // process.exit(1);
  });

const ContentSecurityPolicy = `
  default-src * data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' domain.com *.domain.com https://agent.vee24.com https://cdn-ukwest.onetrust.com/consent//.json;
`;

server.get(`/app-${appName}/build-info`, (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Content-Security-Policy', ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim());
  res.send(
    JSON.stringify({
      // These need to be set in the Docker file and passed at build time
      buildId: process.env.GITHUB_RUN_NUMBER || 'GITHUB_RUN_NUMBER not set on build',
      commitHash: process.env.GIT_SHA || 'GIT_SHA not set on build',
      buildDateTime: process.env.BUILD_DATE_STRING || 'BUILD_DATE_STRING not set on build',
    }),
  );
});

app.prepare().then(() => {
  if (typeof proxyConfig !== 'undefined') {
    const proxyMiddleware = require('http-proxy-middleware');
    Object.keys(proxyConfig).forEach((context) => {
      server.use(proxyMiddleware(context, proxyConfig[context]));
    });
  }

  // Default catch-all handler to allow Next.js to handle all other routes
  server.all('*', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;

    const allCookies = new Cookies(req, res);
    const jSessionId = allCookies.get('JSESSIONID') || '';
    const requestUUID = uuidv4();
    const newrelic = require('newrelic');
    sendToNewRelic(newrelic, req, pathname, requestUUID, jSessionId);

    return handler(req, res, { requestUUID, jSessionId }, newrelic);
  });

  server.listen(3000, () => {
    fs.writeFileSync('node_https.pid', process.pid.toString(), { flag: 'w' }, (err) => {
      if (err) {
        logger(`Error writing https server pid file`, 'E', 'standard', 0);
      }
      logger(`Written https server pid file`, 'E', 'standard', 0);
    });
    logger('Server started http://localhost:3000');
  });
});
