const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin, afterRunHandler } = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const fs = require('fs');

const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );

  on('after:run', async (results) => {
    if (results) {
      await afterRunHandler(config);
      fs.writeFile("cypress/.run/results.json", JSON.stringify(results));
    }
  });

  return config;
};

module.exports = defineConfig({
  env: {
    HOST: 'http://localhost:8080'
  },
  e2e: {
    specPattern: './**/*.feature',
    video: false,
    setupNodeEvents,
    experimentalInteractiveRunEvents: true,
    downloadsFolder: './cypress/.run/downloads',
    fixturesFolder: './cypress/.run/fixtures',
    screenshotsFolder: './cypress/.run/screenshots',
    videosFolder: './cypress/.run/videos'
  }
});