afterEach(() => {
  cy.screenshot();
  let screenshotsFolder = Cypress.config("screenshotsFolder");
  let testState = window.testState;
  let stepResult =
    testState.runTests[testState.currentScenario.name][testState.currentStep];
    let screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} -- after each hook.png`;
  cy.readFile(
    `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
    "base64"
  ).then((imgData) => {
    stepResult.attachment = {
      data: imgData,
      media: { type: "image/png" },
      index: testState.currentStep,
      testCase: testState.formatTestCase(testState.currentScenario),
    };
  });
});