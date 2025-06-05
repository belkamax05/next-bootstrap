const baseConfig = require('../../config/jest.base.config');
const path = require('path');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...baseConfig,
  displayName: 'ui',
  coverageDirectory: path.join(baseConfig.coverageDirectory, 'libs/ui'),
  collectCoverageFrom: [...baseConfig.collectCoverageFrom],
  reporters: ['default', ['jest-junit', { outputDirectory: './junit', outputName: 'ui.xml' }]],
};
