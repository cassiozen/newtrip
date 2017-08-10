var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: ["./src/index.js", "./src/style.scss"],
  output: {
    path: __dirname,
    filename: "./public/bundle.js" // assumes your bundle.js will also be in the root of your project folder
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "./public/bundle.css",
      allChunks: true
    })
  ]
};
