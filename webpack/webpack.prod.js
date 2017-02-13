"use strict";

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [path.resolve(__dirname, '../src/app.js')],
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: path.join('js', 'bundle.js'),
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: 'babel_cache',
                    presets: [
                        'es2015', 'react'
                    ],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }, {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: true,
            beautify: false,
            dead_code: true
        }),
    ],
    devtool: 'eval'
};
