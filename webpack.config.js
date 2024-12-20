const webpack = require("webpack");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const { version } = require("./package.json");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const banner = `/*!
 * Spacing.js v${version}
 * Copyright (c) 2021-${new Date().getFullYear()} Steven Lei
 * Released under the MIT License.
 */`;

/**
 * @type {(env: any, argv: { mode: string }) => webpack.Configuration}
 */
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const filename = isProduction ? 'spacing.min.js' : 'spacing.js';

  return {
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename,
      library: {
        name: "Spacing",
        type: "umd",
        export: "default",
      },
      globalObject: 'this',
      clean: true,
    },
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    resolve: {
      extensions: [".ts", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.(t|j)s$/,
          loader: "babel-loader",
          exclude: /(node_modules)/,
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: /@license|@preserve|^!/i,
            },
            compress: {
              pure_funcs: ["console.info", "console.debug", "console.log"],
            },
          },
          extractComments: false,
        }),
      ],
    },
    plugins: [
      new webpack.BannerPlugin({
        banner,
        raw: true,
        entryOnly: true,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
        'process.env.VERSION': JSON.stringify(version),
      }),
      ...(isProduction && env.analyze ? [new BundleAnalyzerPlugin()] : []),
    ],
  };
};
