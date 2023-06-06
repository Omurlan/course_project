import webpack from "webpack";
import { BuildPaths } from "./types/config";

export function buildLoaders({}: BuildPaths): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const sassLoader = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };

  return [tsLoader, sassLoader];
}
