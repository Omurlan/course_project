import path from 'path'
import type webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): webpack.Configuration => {
  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const isDev = mode === 'development'

  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    locales: path.resolve(__dirname, 'public', 'locales'),
    buildLocales: path.resolve(__dirname, 'build', 'locales')
  }

  const apiUrl = env.apiUrl ?? 'http://localhost:8000'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    apiUrl,
    isDev,
    port: PORT
  })

  return config
}
