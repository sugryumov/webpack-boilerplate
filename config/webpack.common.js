const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { src, build, public } = require('./paths');

module.exports = {
  entry: [`${src}/index.js`],

  output: {
    path: build,
    filename: '[name].bundle.js',
    publicPath: '/',

    // Очищает директорию dist перед обновлением бандла
    // Свойство стало доступно с версии 5.20.0, до этого использовался CleanWebpackPlugin
    clean: true,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: public, to: 'assets' }],
    }),

    new HtmlWebpackPlugin({
      favicon: `${public}/favicon.ico`,
      template: `${src}/index.html`,
    }),
  ],

  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'] },

      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },

  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': src,
      'assets': public,
    },
  },
};