import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

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

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean)
      }
    }
  }

  const sassLoader = buildCssLoader(isDev)

  return [svgLoader, fileLoader, babelLoader, tsLoader, sassLoader]
}
