const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.gamesforthebrain.com/game/checkers/',
    defaultCommandTimeout: 10000,
  },
})
