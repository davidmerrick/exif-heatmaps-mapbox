var path = require('path');
const Dotenv = require('dotenv-webpack');

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
        })
    ]
};