import { type ArticleCommentsSchema, type ArticleRecommendationsSchema } from 'pages/ArticlePage'

export interface ArticlePageSchema {
  comments: ArticleCommentsSchema
  recommendations: ArticleRecommendationsSchema
}
