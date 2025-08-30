/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  coverageDirectory: 'coverage',
  coverageReporters: ['text','lcov','html'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'reports/junit', outputName: 'junit.xml' }]],
};
