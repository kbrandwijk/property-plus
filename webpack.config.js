var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {},
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [/app\/lib/, /node_modules/],
      loader: 'ng-annotate!babel'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.styl$/,
      loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
    }]

  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      hash: true
    }),

    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      "Tether": 'tether',
      "window.Tether": "tether",
      "_": "lodash"
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
      }
    })
  ]
};
