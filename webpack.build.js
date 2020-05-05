const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "script.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ["@svgr/webpack"]
      }
    ]
  }
};