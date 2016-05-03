const webpack = require('webpack'),
      path    = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist')
}

const COMMON = {
  entry: PATHS.src + '/main.js',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
}

module.exports = {
  paths: PATHS,
  common: COMMON
}
