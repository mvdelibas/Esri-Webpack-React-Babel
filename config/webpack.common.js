const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const helpers = require('./helpers');

const NODE_ENV = process.env.NODE_ENV.trim();
const devMode = NODE_ENV !== 'production'


module.exports = {
    entry: {
        'app': [
            helpers.root('client/app/index')
        ]
    },

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        libraryTarget: 'amd'
    },

    resolve: {
        extensions: ['.js', '.json', '.css', '.scss', '.html'],
        alias: {
            'app': 'client/app'
        }
    },

    module: {
        rules: [
            // JS files
            {
                test: /\.jsx?$/,
                include: helpers.root('client'),
                loader: 'babel-loader'
            },

            // SCSS files
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            }

        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),

        new HtmlWebpackPlugin({
            template: helpers.root('client/public/index.html'),
            inject: false,
            minify: {
                collapseWhitespace: true
            },
            hash: false,

            jsapiVersion: '4.9'
        }),

        new CopyWebpackPlugin([{
            from: helpers.root('client/public')
        }]),

        new MiniCssExtractPlugin({
            filename: devMode ? 'css/[name].css' : 'css/[name].css',
            chunkFilename: devMode ? 'css/[id].css' : 'css/[id].css',
        })
    ],

    externals: [
        function (context, request, callback) {

            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request)
            ) {
                return callback(null, "amd " + request);
            }
            callback();
        }

    ]

};