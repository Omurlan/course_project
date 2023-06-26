import { type BuildOptions } from './types/config'
import type { Configuration } from 'webpack-dev-server'

export function buildDevServer (options: BuildOptions): Configuration {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        secure: false
      }
    }
  }
}
