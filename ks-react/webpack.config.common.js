const webpack = require('webpack'),
      path = require('path'),
      merge = require('webpack-merge');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist')
}

const COMMON = {
  entry: PATHS.src + '/main',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        include: PATHS.src,
        loader: 'babel'
      }
    ]
  }
}

module.exports = {
  paths: PATHS,
  common: COMMON
}
