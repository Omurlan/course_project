export type BuildMode = 'production' | 'development'
export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
  locales: string
  buildLocales: string
}

export interface BuildEnv {
  apiUrl: string
  mode: BuildMode
  port: number
}

export interface BuildOptions {
  apiUrl: string
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
}
