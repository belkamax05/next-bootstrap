const baseConfig = require('../../config/jest.base.config');
const path = require('path');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...baseConfig,
  displayName: 'utils',
  coverageDirectory: path.join(baseConfig.coverageDirectory, 'libs/utils'),
  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom,
    '!**/src/schema/**/*.*',
    '!**/src/helpers/pinterest/**/*.*',
  ],
  reporters: ['default', ['jest-junit', { outputDirectory: './junit', outputName: 'utils.xml' }]],
};
