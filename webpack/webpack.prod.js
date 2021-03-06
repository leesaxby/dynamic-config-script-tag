const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            enforce: 'pre',
            loader: 'eslint-loader',
            exclude: /node_modules/,
            options: {
                failOnWarning: false,
                failOnError: true,
            },
        }],
    },
    plugins: [
        // Prevents vendor file being re-hashed when new "user" module is added.
        new webpack.HashedModuleIdsPlugin(),
        new CopyWebpackPlugin([
            { from: './config.js' },
        ]),
    ],
});
