const WebpackNotifierPlugin = require('webpack-notifier');

const config = require('./webpack.config.common');

config.mode = 'development';
config.plugins = [
  new WebpackNotifierPlugin({ alwaysNotify: true }),
];

module.exports = config;
