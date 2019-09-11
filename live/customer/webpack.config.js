const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name]_bundle.js',
    path: `${__dirname}/public`,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new HtmlWebpackPlugin({
         inject: false,
         template: `public/index.html`
    })
  ],
  optimization: {
    minimize: true,
  },
  // performance: {
  //  hints: false,
  //  maxEntrypointSize: 512000,
  //  maxAssetSize: 512000
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|\.json$)/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ],
  }
};
