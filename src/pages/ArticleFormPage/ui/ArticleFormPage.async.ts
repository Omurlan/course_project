import { lazy } from 'react'

export const ArticleFormPageAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    resolve(require('./ArticleFormPage'))
  }, 300)
}))
