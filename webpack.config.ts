import {Configuration} from 'webpack';

/* eslint node/no-unpublished-require: 0 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: {loader: 'ts-loader'},
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },

  // addition - add source-map support
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [{from: 'static', to: 'static'}],
    }),
  ],
};

export default config;
