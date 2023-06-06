import webpack from "webpack";
import { BuildPaths } from "./types/config";

export function buildResolvers({}: BuildPaths): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
