const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/index.js','babel-polyfill'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        static: './dist'
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: "./src/index.html"
    })],
    module:{
        rules : [
            {
                test:'/\.js$/',
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                "style-loader", //3.inject style into DOM
                "css-loader", // 2.turns css into commonJS
                "sass-loader" // 1.turns sass into css
                  ]
            }
        ]
    }
}