const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main_bundle: "./src/index.js",
    // pres_bundle: "./src/presentation.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        enforce: "pre", // preload the jshint loader
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' },
      // { from: './src/presentation.html', to: 'presentation.html' },
      { from: './src/libs', to: 'libs' },
      // { from: './src/pics', to: 'pics' },
    ]),
  ],
  watch: true,
  watchOptions: {
    ignored: './src/node_modules/'
  },
  devtool: "#source-map" 
};