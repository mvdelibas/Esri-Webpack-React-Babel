const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const helpers = require('./helpers');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',

  output: {
    filename: 'js/[name].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compressor: {
            warnings: false,
            screw_ie8: true
          },
          output: {
            comments: false
          }
        }
        // cache: true,
        // parallel: true,
        // sourceMap: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        sideEffects: true,
      },
    ]
  },

  plugins: [
    
  ]
});