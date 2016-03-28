// Karma configuration
// Generated on Sun Mar 27 2016 16:53:43 GMT+0800 (CST)
var webpackConfig = require('./webpack.config.test')

var configuration = {
  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: 'src',


  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['jasmine'],


  // list of files / patterns to load in the browser
  files: [
    '**/*.spec.js',
  ],


  // list of files to exclude
  // exclude: [
  //   'client.js'
  // ],


  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: {
    '**/*.spec.js': ['webpack']
  },

  webpack:  webpackConfig,


  //Don't spam the console when running in karma!
  webpackServer: {
    noInfo: true
  },


  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['spec', 'coverage'],
  coverageReporter: {
    type: 'text'
  },


  // web server port
  port: 9876,


  // enable / disable colors in the output (reporters and logs)
  colors: true,

  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: false,


  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['Chrome'],



  customLaunchers: {
    Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
    }
  },

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: true,

  // Concurrency level
  // how many browser should be started simultaneous
  concurrency: Infinity
}



module.exports = function(config) {

  if(process.env.TRAVIS){
    configuration.browsers = ['Chrome_travis_ci'];
  }

  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  configuration.logLevel = config.LOG_INFO

  config.set(configuration)
}
