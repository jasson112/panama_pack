const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  mode: "development",
  watchOptions: {
    aggregateTimeout: 600,
  },
  entry: {
    style: ["./scss/style.scss"],
    modules: ["./js/globals.js"],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./images",
          to: path.resolve(__dirname, "static/dist/images"),
        },
      ],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./fonts",
          to: path.resolve(__dirname, "static/dist/fonts"),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./templates/layout.jinja2",
      filename: "index.html",
    }),
    new ManifestPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "static/dist"),
    filename: "js/[name].[contenthash:8].js",
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  module: {
    rules: [
      
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "/css/[name].[contenthash:8].css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader?-url",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
