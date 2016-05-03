const webpack = require('webpack'),
      merge   = require('webpack-merge'),
      config  = require('./webpack.config.common');

module.exports = merge(config.common, {
  devServer: {
    contentBase: config.paths.src,
    port: 8000,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
