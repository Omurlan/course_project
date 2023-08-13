import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: Omit<BuildPaths, 'buildLocales' | 'locales'> = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config.module?.rules?.push(buildCssLoader(true))

  // @ts-expect-error ...
  const filesRule = config.module?.rules?.find((r: webpack.RuleSetRule) => r.test.test('.svg'))
  // @ts-expect-error ...
  filesRule.exclude = /\.svg$/

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })

  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx')

  return config
}
