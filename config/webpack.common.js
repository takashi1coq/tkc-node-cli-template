const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
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
    extensions: [ '.tsx', '.ts', '.js' ]
  }
};
