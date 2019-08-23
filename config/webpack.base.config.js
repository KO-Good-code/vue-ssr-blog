const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyESPlugin = require('uglifyjs-webpack-plugin')
// const UglifyJSPlugin  = require('webpack/lib/optimize/UglifyJsPlugin');//压缩css插件

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
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader','sass-loader'],
                // use:[miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader']
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
        // new UglifyESPlugin({
        //     // 多嵌套了一层
        //     uglifyOptions: {
        //       compress: {
        //         // 在UglifyJs删除没有用到的代码时不输出警告
        //         warnings: false,
        //         // 删除所有的 `console` 语句，可以兼容ie浏览器
        //         drop_console: true,
        //         // 内嵌定义了但是只用到一次的变量
        //         collapse_vars: true,
        //         // 提取出出现多次但是没有定义成变量去引用的静态值
        //         reduce_vars: true,
        //       },
        //       output: {
        //         // 最紧凑的输出
        //         beautify: false,
        //         // 删除所有的注释
        //         comments: false,
        //       }
        //     }
        //   })
    ]
}
