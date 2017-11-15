var path = require('path');
const Dotenv = require('dotenv-webpack');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    plugins: [
        new Dotenv({
            path: '.env',
            systemvars: true
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};