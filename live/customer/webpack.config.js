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
    })
  ],
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|config\.js$|manifest\.json$)/,
        loader: "babel-loader",
        query: {
          presets: ['es2016'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              name: '[name].[ext]',
              outputPath: 'assets/img/'
            }
          }
        ]
      },
    ],
  },
  "devServer": {
    contentBase: `${__dirname}/public/`, //path.join(__dirname, "public/"),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods" : "*"
    }
  }
};
