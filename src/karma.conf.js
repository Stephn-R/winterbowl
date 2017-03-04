module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine', 'karma-typescript'],

    files: [
      'Client/test/tests.entry.ts',
      {pattern: 'Client/**/*!(spec).ts'},
      {pattern: 'Client/**/*.spec.ts'}
    ],

    preprocessors: {
      '**/*.ts': ['karma-typescript']
    },

    reporters: ['mocha', 'karma-typescript'],

    karmaTypescriptConfig: {
      reports: {
        html: 'Coverage'
      }
    },

    port: 9876,

    colors: true,

    singleRun: true,

    logLevel: config.LOG_INFO,

    browsers: ['Chrome'],

    plugins: [
      'karma-babel-preprocessor',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-mocha-reporter',
      'karma-typescript'
    ]
  });
};
