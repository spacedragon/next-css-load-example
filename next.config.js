const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack")

module.exports = {
  webpack: function (webpackConfig, { dev }) {
    webpackConfig.resolve.extensions = ['.css', '.js', '.jsx', '.json'];
    let cssLoader = {
      test: /\.css$/,
       loader: ExtractTextPlugin.extract({
        loader: `${require.resolve('css-loader')}`
      })
    };
    webpackConfig.module.rules.unshift(cssLoader);
    webpackConfig.plugins.push(
      new ExtractTextPlugin({
        filename: '../static/[name].css',
        disable: false,
        allChunks: true
      }),
      new CopyWebpackPlugin([{
        from: {
          glob: `./pages/**/*.css`,
          dot: true
        },
        to: `./dist/[path]/[name].css`
      }], { debug: 'warning' }
      )
    )
    return webpackConfig
  }

}
