// Jasmine-Konfiguration
window.onload = () => {
  let $ = jQuery;

  let jasmineEnv = jasmine.getEnv();
  jasmineEnv.clearReporters();

  jasmineEnv.addReporter({
    jasmineStarted: () => {},
    suiteStarted: () => {},
    specStarted: () => {},
    specDone: () => {},
    suiteDone: () => {},
    jasmineDone: () => {},
  });

  jasmineEnv.execute();
};
