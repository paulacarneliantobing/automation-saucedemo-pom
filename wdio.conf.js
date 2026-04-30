exports.config = {
  runner: "local",

  specs: ["./test/specs/**/*.js"],

  exclude: [],

  maxInstances: 5,

  capabilities: [
    {
      browserName: "chrome",

      // WDIO v9 chromedriver
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
  // SERVICES
  //
  services: [
    [
      "visual",
      {
        baselineFolder: "./baseline/",
        screenshotPath: "./.tmp/",
        autoSaveBaseline: true,

        // (ini nanti bisa dipindah ke compareOptions kalau mau)
        blockOutStatusBar: true,
        blockOutToolBar: true,
      },
    ],
  ],

  framework: "mocha",

  reporters: ["spec"],

  // ✅ TAMBAHAN PENTING (BIAR EXPECT WDIO JALAN)
  expect: {
    wait: 5000,
    interval: 500,
  },

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
