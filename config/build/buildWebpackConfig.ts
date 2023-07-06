import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (
  options: BuildOptions
): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: options.paths.build,
      publicPath: '/',
      clean: true
    },
    module: {
      rules: buildLoaders(options)
    },
    optimization: options.isDev ? { splitChunks: { chunks: 'all' } } : undefined,
    resolve: buildResolvers(options.paths),
    plugins: buildPlugins(options),
    devServer: options.isDev ? buildDevServer(options) : undefined,
    devtool: options.isDev ? 'inline-source-map' : undefined
  }
}
