// module.exports = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest',
//   },
//   moduleNameMapper: {
//     '\\.(css|less|scss)$': 'identity-obj-proxy',
//   },
//   setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
//   testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
//   collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!<rootDir>/src/**/*.test.{ts,tsx}'],
//   coverageReporters: ['lcov', 'text-summary'],
// };

export default {
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
};