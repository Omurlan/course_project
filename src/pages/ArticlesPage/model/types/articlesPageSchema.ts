import { type EntityState } from '@reduxjs/toolkit'
import { type Article, type ArticleView } from 'entities/Article'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading: boolean
  error: string | null
  view: ArticleView
}
