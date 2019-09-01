const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ExtractTextPlugin  = require('extract-text-webpack-plugin');//压缩css插件

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.vue', '.ts', '.tsx','.scss'],
        alias: {
            '@': path.resolve('src')
          }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                // use: ['vue-style-loader', 'css-loader', 'postcss-loader','sass-loader'],
                use:ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader','sass-loader'],
                    fallback: 'vue-style-loader'
                  })
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,    // 10Kb
                        name: `images/[hash:8].[name].[ext]`
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ExtractTextPlugin('[name].[hash:4].css')
    ]
}
