const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    main: './src/_assets/js/main.js',
    styles: './src/_assets/css/main.css'
  },
  output: {
    path: path.resolve(__dirname, '_site/js'),
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/main.css'
    }),
    new FixStyleOnlyEntriesPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src/_assets/'),
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
};
