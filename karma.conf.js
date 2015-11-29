/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [
    ],

    proxies: {
      // '/node_modules': '/base/node_modules',
      // '/base/cards': '/base/app/cards',
      // '/base/jspm_packages': '/base/app/jspm_packages'
    },

    jspm: {
      serveFiles: [
        'src/*.js',
        './index.js'
      ],
      loadFiles: [
        'tests/*.js'
      ]
    },

    autoWatch: true,

    frameworks: ["jspm", "jasmine"],

    browsers: ["Chrome"],

    plugins: [
      "karma-jspm",
      "karma-chrome-launcher",
      "karma-jasmine",
      "karma-junit-reporter"
    ],

    junitReporter: {
      outputFile: "test_out/unit.xml",
      suite: "unit"
    }

  });
};
