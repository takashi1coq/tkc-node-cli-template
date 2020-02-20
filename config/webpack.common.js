const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve('src/index.ts'),
  target: 'node',
  plugins: [
      new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      src : path.resolve('src'),
    }
  }
};
