const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber()),
  on('after:run', (results) => {
    if (results) {
      fs.mkdirSync("cypress/.run", { recursive: true });
      fs.writeFile("cypress/.run/results.json", JSON.stringify(results));
    }
  })
}