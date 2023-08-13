import { lazy } from 'react'

export const ArticlePageAsync = lazy(async () => await import('./ArticlePage'))
