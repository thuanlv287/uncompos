/**
 * To only build library
 */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const outputDirectory = 'lib';

module.exports = {
  mode: 'production',
  entry: './src/components/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }
    ],
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory])
  ],
}