/** @type {import('jest').Config} */
const config = {
  preset: "ts-jest",
  testEnvironment: "node",

  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  collectCoverageFrom: [
    "lib/**/*.{ts,tsx,js,jsx}",
    "!**/__tests__/**",
    "!**/*.d.ts",
  ],
  coverageThreshold: {
    global: { branches: 100, functions: 100, lines: 100, statements: 100 },
  },

  moduleNameMapper: { "^@/(.*)$": "<rootDir>/$1" },

  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "reports/junit", outputName: "junit.xml" },
    ],
  ],
};
module.exports = config;
