'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// path constants
const paths = {
    BUILD: path.resolve(__dirname, 'build'),
    JS: path.resolve(__dirname, 'src'),
    STATIC: path.resolve(__dirname, 'static'),
};
module.exports = {
    entry: path.join(paths.JS, 'entry.jsx'),
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
                    use: {
                        loader: 'css-loader',
                        options: { url: false },
                    },
                }),
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader',
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'src',
            'node_modules',
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'BUILD_ENV': JSON.stringify(process.env.BUILD_ENV),
            },
        }),
        new HtmlWebpackPlugin({
            template: path.join(paths.STATIC, 'index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'),
        new CopyWebpackPlugin([
            {
                from: path.join(paths.STATIC, 'img'),
                to: path.join(paths.BUILD, 'img'),
                transform: (content, path) => content,
            },
        ]),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: paths.STATIC,
        port: 5999,
    },
    devtool: 'cheap-eval-source-map',
};
