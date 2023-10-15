const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/output',
  helpers: {
    Playwright: {
      browser: 'webkit',
      url: 'http://localhost:7000',
      show: true,
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'bayfood-restaurant',
};
