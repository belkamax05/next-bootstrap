const baseConfig = require('../../config/jest.base.config');
const path = require('path');

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...baseConfig,
  displayName: 'types',
  coverageDirectory: path.join(baseConfig.coverageDirectory, 'libs/types'),
  collectCoverageFrom: [...baseConfig.collectCoverageFrom],
  reporters: ['default', ['jest-junit', { outputDirectory: './junit', outputName: 'types.xml' }]],
};
