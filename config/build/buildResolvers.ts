import type webpack from 'webpack'
import { type BuildPaths } from './types/config'

export function buildResolvers (paths: BuildPaths): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      '@': paths.src
    }
  }
}
