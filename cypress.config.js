const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://courses.ultimateqa.com/",
    pageLoadTimeout: 30000, // 30 seconds
    defaultCommandTimeout: 10000, // 10 seconds
    retries: {
      runMode: 2, // Retry failed tests twice in run mode
      openMode: 0, // No retries in open mode
    },
    watchForFileChanges: false, // Watch for file changes
    specPattern: "cypress/e2e/**/*.cy.js", // Pattern to match test files
    supportFile: "cypress/support/e2e.js", // Path to support file
    video: true, // Enable video recording of tests
    screenshotOnRunFailure: true, // Take screenshots on test failure
    viewportWidth: 1280, // Default viewport width
    viewportHeight: 720, // Default viewport height
    chromeWebSecurity: false, // Disable Chrome web security for testing
    experimentalSessionAndOrigin: true, // Enable experimental session and origin features
    env: {
      // Custom environment variables
      username: "standard_user",
      password: "",
    },
    videoCompression: 15,
    hideXHR: true,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    timestamp: 'mmddyyyy_HHMMss',
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
});
