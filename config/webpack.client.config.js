const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const base = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/entry-client.ts')
  },

  plugins: [
    new VueSSRClientPlugin(),   // 新增
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    })
  ]
});