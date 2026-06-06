module.exports = {
  setupFiles: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx}",
    "!./src/**/index.js",
    "!./src/main.jsx",
    "!./src/**/main.js",
    "!./src/router/**/*",
    "!./src/**/routes/**/*",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};