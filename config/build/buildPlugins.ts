import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

export function buildPlugins ({
  paths,
  apiUrl,
  isDev
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins: webpack.WebpackPluginInstance[] = [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __ENVIRONMENT__: JSON.stringify('web')
    }),
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }]
    }),
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true
    })
  ]

  if (isDev) {
    plugins.push(new ReactRefreshPlugin())
    plugins.push((new webpack.HotModuleReplacementPlugin()))
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }

  return plugins
}
