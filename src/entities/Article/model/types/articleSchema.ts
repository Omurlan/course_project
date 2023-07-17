import { type Article } from './article'

export interface ArticleSchema {
  isLoading: boolean
  error: null | string
  data?: Article
}
