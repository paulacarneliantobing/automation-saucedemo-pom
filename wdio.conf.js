exports.config = {
  runner: "local",

  specs: ["./test/specs/**/*.js"],

  exclude: [],

  maxInstances: 5,

  capabilities: [
    {
      browserName: "chrome",

      "wdio:chromedriverOptions": {},

      "goog:chromeOptions": {
        args: ["--start-maximized"],
      },
    },
  ],

  logLevel: "info",

  bail: 0,

  baseUrl: "https://www.saucedemo.com",

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  //
  // ✅ SERVICES (WAJIB INI)
  //
  services: [],

  framework: "mocha",

  reporters: ["spec"],

  //
  // ✅ EXPECT WDIO AKTIF
  //
  expect: {
    wait: 5000,
    interval: 500,
  },

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
