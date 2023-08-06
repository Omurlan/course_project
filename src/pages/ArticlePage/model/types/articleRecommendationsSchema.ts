import { type EntityState } from '@reduxjs/toolkit'
import { type Article } from 'entities/Article'

export interface ArticleRecommendationsSchema extends EntityState<Article> {
  isLoading: boolean
  error: null | string
}
