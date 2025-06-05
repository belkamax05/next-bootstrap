import { SiteConfig } from '@/types';
import nextBundleAnalyzer from '@next/bundle-analyzer';
import fs from 'fs';
import { NextConfig } from 'next';
import path from 'path';
import { Configuration, EnvironmentPlugin } from 'webpack';
import storesConfig from '../../config/stores.config.json';

const findClosestDir = (startDir: string, where: string) => {
  let currentDir = startDir;
  while (currentDir !== path.parse(currentDir).root) {
    const appsPath = path.join(currentDir, where);
    if (fs.existsSync(appsPath) && fs.statSync(appsPath).isDirectory()) {
      return appsPath;
    }
    currentDir = path.dirname(currentDir);
  }

  return null;
};

const NODE_ENV = process.env.NODE_ENV || 'development';

const getDistDir = () => {
  //! Breaking this can block pipeline and need manual intervention of DevOps to fix it
  //? In "development" environment no need to specify distDir, next will use the default .next directory close to source files
  //? In "production" works a bit tricky:
  //? Production "build" step will create ".next" in "dist" folder, so pipeline can copy it from "/fe/dist/"
  //? Production "start" step will run from "dist" folder, so it will look for ".next" in the same folder
  if (NODE_ENV === 'development') return undefined;
  const currentDirNextLocation = path.join(__dirname, '.next');
  const nextExistsWithinCurrentDir = fs.existsSync(currentDirNextLocation);
  const appsDir = findClosestDir(__dirname, 'apps');
  const rootDir = path.join(appsDir, '..');
  const distDirAbsolute = nextExistsWithinCurrentDir
    ? currentDirNextLocation
    : path.join(rootDir, 'dist/apps/storefront/.next');

  const distDirRelative = path.relative(__dirname, distDirAbsolute);
  return distDirRelative;
};

const distDir = getDistDir();

console.log('[next.config.ts]', {
  NODE_ENV,
  distDir,
});

const isDEV = process.env.NODE_ENV !== 'production';

const storesFiles: SiteConfig[] = [];

//? Precompute storeFiles synchronously
Object.keys(storesConfig).forEach((store) => {
  const siteConfig = storesConfig[store];

  const filename = path.resolve(
    `./public/static/siteConfig.${siteConfig.id}.${siteConfig.languageId}.config.js`,
  );

  if (fs.existsSync(filename)) {
    const data = require(filename); //? Use require to synchronously load the file
    storesFiles.push({
      ...data,
      storeId: siteConfig.id,
      locale: siteConfig.locale,
    });
  }
});

const ContentSecurityPolicy = `
  default-src * data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' domain.com;
`;

const nextConfig: NextConfig = {
  // i18n,
  allowedDevOrigins: ['localhost:4200'],
  distDir,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ];
  },
  // nx: {
  //   // Set this to true if you would like to to use SVGR
  //   // See: https://github.com/gregberge/svgr
  //   svgr: false,
  // },
  compiler: {
    emotion: false,
    styledComponents: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
      },
    ],
    disableStaticImages: true,
  },
  staticPageGenerationTimeout: 3000,
  reactStrictMode: true,
  webpack: (config: Configuration) => {
    const assetModuleFilename = 'static/[hash][ext][query]';

    const resConfig: Configuration = {
      ...config,
      output: {
        ...config.output,
        assetModuleFilename: assetModuleFilename,
      },
      resolve: {
        ...config.resolve,
        extensions: ['.ts', '.tsx', '.js'],
        fallback: {
          ...config.resolve.fallback,
          fs: false,
          stream: false,
        },
      },
      experiments: {
        ...config.experiments,
        asyncWebAssembly: true,
      },
      optimization: {
        ...config.optimization,
        minimize: !isDEV,
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(svg|mp4|gif|jpg|Jpeg|png|vc|ico|eot|ttf|woff|woff2|font-woff)$/,
            type: 'asset/resource',
            generator: {
              filename: assetModuleFilename,
            },
          },
        ],
      },
      plugins: [
        ...config.plugins,
        new EnvironmentPlugin({
          BUILD_TIME: new Date().toISOString(),
        }),
      ],
      ignoreWarnings: [
        {
          message: /node_modules/,
        },
      ],
    };
    return resConfig;
  },
};

let conf = nextConfig;

if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = nextBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  });
  conf = withBundleAnalyzer(conf);
}

export default conf;
