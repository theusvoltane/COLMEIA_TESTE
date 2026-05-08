const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
      video: true,
      reporter: '/home/theusvoltane/node_modules/mochawesome',
      reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: true,
        json: true,
        timestamp: 'mmddyyyy_HHMMss',
      },
    },
  },
);
