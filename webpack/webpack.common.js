const plugins = require('./plugins')
const path = require('path')

module.exports = {
    entry: {
        app: './src/scripts/index.js',
        vendors: './src/scripts/vendors.js'
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].chunkhash.bundle.js',
        chunkFilename: '[name].chunkhash.bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true,
        port: 9000
    },
    plugins,
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};