module.exports = {
    context: __dirname + '/src',
    entry: [
        './index.js'
        ],
    output:{
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015']
                }
            }
        ]
    }
}