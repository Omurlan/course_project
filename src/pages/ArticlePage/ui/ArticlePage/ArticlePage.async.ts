import { lazy } from 'react'

export const ArticlePageAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => {
    // @ts-expect-error test
    resolve(import('./ArticlePage'))
  }, 300)
}))
