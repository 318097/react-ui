const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = () => {
  return {
    ...commonConfig,
    entry: "./src/UIComponents/index.js",
    mode: "production",
    devtool: "source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      libraryTarget: "commonjs2",
      globalObject: "this",
    },
    externals: {
      react: "react",
      "react-dom": "react-dom",
    },
    plugins: [new CopyPlugin([{ from: "./src/magicdust", to: "./styles/" }])],
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     new TerserPlugin({
    //       terserOptions: {
    //         compress: {
    //           pure_funcs: ["console.log"],
    //         },
    //       },
    //     }),
    //   ],
    // },
  };
};
