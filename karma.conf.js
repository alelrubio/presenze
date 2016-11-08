// Karma configuration
// Generated on Sat Oct 01 2016 18:18:28 GMT+0200 (W. Europe Daylight Time)

const testFiles = 'test/**/*.js';
const files = ['./dist/bundle.vendor.js', './dist/bundle.app.js', './test/**/*.js'];


const webpackConfig = require('./webpack.config');

module.exports = function setKarmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files:  files,
    preprocessors: {
      [testFiles]: ['webpack'],
    },
    webpack: webpackConfig,
    //webpackMiddleware: {noInfo: true},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,

  })
}
