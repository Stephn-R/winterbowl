const webpackConfig = require('./Webpack/staging');

webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      './Client/test/tests.entry.js'
    ],

    preprocessors: {
      './Client/test/tests.entry.js': ['webpack', 'sourcemap'],
      './Client/**/*!(spec).ts': ['coverage']
    },

    webpack: webpackConfig,

    webpackMiddleware: {},

    reporters: ['mocha', 'coverage', 'karma-remap-istanbul'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],

    singleRun: true,

    coverageReporter: {
      type: 'in-memory'
    },

    remapIstanbulReporter: {
      remapOptions: {},
      reportOptions: {},
      reports: {
        html: './Coverage'
      }
    },

    tsconfig: './tsconfig.json'
  });
};
