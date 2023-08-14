import {
  createEntityAdapter,
  createSlice, type PayloadAction
} from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'
import { type ArticleRecommendationsSchema } from '../types/articleRecommendationsSchema'
import {
  fetchArticleRecommendations
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticleRecommendations =
    recommendationsAdapter.getSelectors<StateSchema>((state) =>
      state.articlePage?.recommendations ?? recommendationsAdapter.getInitialState())

const articlePageRecommendationsSlice = createSlice({
  name: 'articlePageRecommendations',
  initialState: recommendationsAdapter.getInitialState<ArticleRecommendationsSchema>({
    isLoading: false,
    error: null,
    ids: [],
    entities: {}
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleRecommendations.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<Article[]>) => {
      state.isLoading = false
      recommendationsAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload ?? null
    })
  }
})

export const {
  reducer: articlePageRecommendationsReducer,
  actions: articlePageRecommendationsActions
} = articlePageRecommendationsSlice
