import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: ['file-loader']
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const babelLoader = buildBabelLoader(isDev)

  const sassLoader = buildCssLoader(isDev)

  return [svgLoader, fileLoader, babelLoader, tsLoader, sassLoader]
}
