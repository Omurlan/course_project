import { BuildOptions } from "./types/config";
import webpack from "webpack";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildPlugins } from "./buildPlugins";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options.paths),
    },
    resolve: buildResolvers(options.paths),
    plugins: buildPlugins(options.paths),
    devServer: options.isDev ? buildDevServer(options) : undefined,
    devtool: options.isDev ? "inline-source-map" : undefined,
  };
}
