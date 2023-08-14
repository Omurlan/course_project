import { type ArticleCommentsSchema } from './articleCommentsSchema'
import { type ArticleRecommendationsSchema } from './articleRecommendationsSchema'

export interface ArticlePageSchema {
  comments: ArticleCommentsSchema
  recommendations: ArticleRecommendationsSchema
}
