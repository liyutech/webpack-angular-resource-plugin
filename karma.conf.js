// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './test/index.spec.js'
    ],
    preprocessors: {
      './test/index.spec.js': ['webpack', 'sourcemap'],
    },
    browsers: [
      'PhantomJS'
    ],
    singleRun: true,
    logLevel: config.LOG_DEBUG,
    webpack: require('./tests.webpack.config'),
    webpackMiddleware: {
      noInfo: 'errors-only'
    },
    port: 9876
  });
};