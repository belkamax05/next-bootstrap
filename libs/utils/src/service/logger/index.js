/*
This is needed on the client and the server and the custom server is js only.
*/
/* eslint-disable no-console */
// const fs = require('fs');
// const { resolve } = require('path');
const os = require('os');

let logPath = `${process.cwd()}/logs`;
let SEPERATOR = '/';
if (os.platform() === 'win32') {
  logPath = `${process.cwd()}}\\logs`;
  SEPERATOR = '\\';
}

const pad = (val, padLen = 2) => val.toString().padStart(padLen, 0);
const padEnd = (val, padLen = 2) => val.toString().padEnd(padLen, 0);

const getDate = () => getDateTime().split(' ')[0];

const getDateTime = (date = new Date()) => {
  const DD = pad(date.getDate());
  const MM = pad(date.getMonth() + 1);
  const YYYY = date.getFullYear();
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  const ss = pad(date.getSeconds());
  const ms = padEnd(date.getMilliseconds(), 3);
  // zero pad these
  return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}.${ms}`;
};

const getAccessLogFilename = () => `${logPath}${SEPERATOR}storefront-app-${getDate()}.log`;

/** @type {(message: string, severity?: string, requestUUID?: string) => void} */
const logger = (message, severity = 'I', requestUUID = 'unknown') => {
  const output = `${getDateTime()} ${requestUUID} ${severity} ${message}\n`;

  if (typeof window === 'undefined') {
    const fs = require('fs');
    const filename = getAccessLogFilename();
    if (!fs.existsSync(logPath)) {
      fs.mkdirSync(logPath, { recursive: true });
    }

    if (!process.logStream) {
      const logStream = fs.createWriteStream(filename, {
        flags: 'a+',
        encoding: 'utf-8',
        mode: 0o644,
      });

      logStream.on('error', console.error);
      process.logStream = logStream;
    }

    process.logStream.write(output);
  } else {
    console.log(output);
  }
};

module.exports = { logger, getDateTime };
