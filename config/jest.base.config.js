process.env.TZ = 'UTC';

/** @type {import('@jest/types').Config.InitialOptions} */
const baseJestConfig = {
  setupFiles: ['../../jest.setup.js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  preset: '../../jest.preset.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  modulePathIgnorePatterns: ['.*__mocks__.*'],
  coverageReporters: ['json', 'html', 'text'],
  coverageDirectory: '../../coverage',
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    '!**/**/dynamic.ts',
    '!**/.next/**/*.*',
    '!**/__mocks__/**/*.*',
    '!**/mocks/**/*.*',
    '!**/__stories__/**/*.*',
    '!**/*.stories.*',
    '!**/*.spy.*',
    '!**/scripts/**/*.*',
    '!**/dev/**/*.*',
    '!**/test-utils/**/*.*',
  ],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[t|j]sx?$': ['babel-jest', { cwd: __dirname, configFile: './babel-jest.config.json' }],
  },
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 83,
      statements: 85,
    },
  },
  transformIgnorePatterns: ['../../node_modules/(?!(@mxt)/)'],
};

module.exports = baseJestConfig;
