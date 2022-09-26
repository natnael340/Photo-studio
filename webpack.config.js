const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.join(__dirname, "myblog/frontend/src", "index.js"),
  mode: "development",
  output: { path: path.resolve(__dirname, "myblog/frontend/static/frontend") },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_mudules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        "myblog/frontend/static/frontend",
        "index.html"
      ),
    }),
  ],
};
