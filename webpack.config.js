var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}