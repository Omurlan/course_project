import { combineReducers } from '@reduxjs/toolkit'
import { type ArticlePageSchema } from '../types'
import { articlePageRecommendationsReducer } from './articlePageRecommendationsSlice'
import { articlePageCommentsReducer } from './articlePageCommentsSlice'

export const articlePageReducer = combineReducers<ArticlePageSchema>({
  recommendations: articlePageRecommendationsReducer,
  comments: articlePageCommentsReducer
})
