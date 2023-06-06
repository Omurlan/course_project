import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { BuildPaths } from "./types/config";

export function buildPlugins({
  html,
}: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
