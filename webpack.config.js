'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// path constants
const paths = {
    BUILD: path.resolve(__dirname, 'build'),
    JS: path.resolve(__dirname, 'src'),
    STATIC: path.resolve(__dirname, 'static'),
};
module.exports = {
    entry: path.join(paths.JS, 'entry.js'),
    output: {
        path: paths.BUILD,
        filename: 'app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.STATIC, 'index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'),
    ],
    devServer: {
        port: 5999,
    },
    devtool: 'cheap-eval-source-map',
};
