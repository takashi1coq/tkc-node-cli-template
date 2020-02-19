'use strict';
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000
  }
})

