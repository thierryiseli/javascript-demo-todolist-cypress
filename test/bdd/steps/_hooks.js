afterEach(() => {
    cy.screenshot();
    const screenshotsFolder = Cypress.config("screenshotsFolder");
    const testState = window.testState;
    const stepResult =
      testState.runTests[testState.currentScenario.name][testState.currentStep];
    const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} -- after each hook.png`;
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