const webpack = require('webpack');

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
  // performance: {
  //  hints: false,
  //  maxEntrypointSize: 512000,
  //  maxAssetSize: 512000
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|config\.js$|manifest\.json$)/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader?name=[name].[ext]',
            options:{
              outputPath: 'assets/img/'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: `${__dirname}/public/`,
    inline: true,
    host: 'localhost',
    port: 8080
  }
};
