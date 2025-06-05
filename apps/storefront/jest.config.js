const baseConfig = require('../../config/jest.base.config');
const path = require('path');

module.exports = {
  ...baseConfig,
  displayName: 'storefront',
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '^.+\\.(png|jpg|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
  },
  coverageDirectory: path.join(baseConfig.coverageDirectory, 'apps/storefront'),
  collectCoverageFrom: [
    '**/(app|components|utils|schema)/**/*.{js,jsx,ts,tsx}',
    ...baseConfig.collectCoverageFrom,
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './junit',
        outputName: 'storefront.xml',
      },
    ],
  ],
};
