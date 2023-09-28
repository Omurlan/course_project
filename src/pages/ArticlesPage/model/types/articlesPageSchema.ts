import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleSortField, type ArticleType, type ArticleView } from 'entities/Article'
import { type SortOrder } from 'shared/types'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading: boolean
  error: string | null
  _inited: boolean

  // pagination
  page: number
  limit?: number
  totalCount?: number

  // filters
  view: ArticleView
  sort: ArticleSortField
  search: string
  order: SortOrder
  type: ArticleType
}
