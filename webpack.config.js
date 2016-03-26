var path = require('path');

var webpack = require('webpack'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

var precss = require('precss'),
  lost = require('lost'),
  cssnext = require('postcss-cssnext'),
  rucksack = require('rucksack-css');

module.exports = {
  // The standard entry point and output config
  entry: [
    'webpack-hot-middleware/client',
    './src/client.js',
  ],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'dist'),
    publicPath: '/.tmp/'
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx' , '.css']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:4]!postcss-loader')
    }, {
      test: /\.png$/,
      loader: 'url-loader'
    }, {
      test: /\.svg$/,
      loader: 'url-loader'
    }]
  },
  postcss: [precss, cssnext, lost, rucksack],
  // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
  plugins: [
    new ExtractTextPlugin("bundle.css", {
      allChunks: true
    }),
    // OccurenceOrderPlugin : optimizes chunks and modules by how much they are used in your app;
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
