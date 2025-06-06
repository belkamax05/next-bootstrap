const { getJestProjects } = require('@nx/jest');

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js', 'jest-canvas-mock'],
  reporters: ['default', ['jest-junit', { outputDirectory: './junit', outputName: 'all.xml' }]],
  projects: getJestProjects(),
};
