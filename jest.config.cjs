module.exports = {
  setupFiles: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "./src/**/*.{js,jsx}",
    "!./src/**/index.js", // Barrel export files
    "!./src/main.jsx", // App config file
    "!./src/**/main.js", // Module config files
    "!./src/router/**/*", // Router config files
    "!./src/**/routes/**/*", // Module routes files
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
