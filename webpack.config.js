const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {


    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options:
                {
                    minimize: false,
                    sources: false,
                }
            },
            {
                test: /\.css$/,
                exclude:/styles.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/styles.css$/,
                use:[
                    MiniCssExtract.loader,
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                loader:'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body',
        }),
        new MiniCssExtract({
            filename:'[name].[fullhash].css',
            ignoreOrder:false,
        }),
        new CopyPlugin({
            patterns:[
            {from:'src/assets/', to:'assets/'}
        ]
        })


    ]



}