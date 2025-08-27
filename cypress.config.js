const { defineConfig } = require("cypress");
const registerCodeCoverageTasks = require('@cypress/code-coverage/task');

module.exports = defineConfig({
  reporter: 'mocha-xunit-reporter',
  reporterOptions: {
    mochaFile: 'test_results/usp-host-junit-[hash].xml',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return registerCodeCoverageTasks(on, config);
    },
  },
});
