const merge = require('webpack-merge'),
      config = require('./webpack.config.common');

module.exports = merge(config.common, {
  output: {
    path: config.paths.dest,
    filename: 'bundle.js'
  }
});
