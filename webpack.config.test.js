var path = require('path');

module.exports = {
  // The standard entry point and output config
  devtool: 'inline-source-map',
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['', '.js', '.jsx']
  },
  isparta: {
    embedSource: true,
    noAutoWrap: true,
    // these babel options will be passed only to isparta and not to babel-loader
    babel: {
      presets: ['es2015', 'stage-0', 'react'],
      plugins: ['transform-decorators-legacy']
    }
  },
  module: {
    preLoaders: [{
      test: /.spec\.js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel'
    }, {
      test: /\.js?$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'isparta'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      query: {
        presets: ["es2015", "stage-0", "react"],
        plugins: ["transform-decorators-legacy"]
      },
      loader: 'babel'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(png|jpg|svg|ttf|css)$/,
      loader: 'null-loader'
    }]
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}
