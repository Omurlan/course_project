import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Article, ArticleView } from 'entities/Article'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList'
import { ARTICLE_VIEW_KEY } from 'shared/const/localstorage'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticles =
    articlesAdapter.getSelectors<StateSchema>((state) => state.articlesPage ?? articlesAdapter.getInitialState())

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: null,
    view: ArticleView.DEFAULT,
    entities: {},
    ids: []
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_KEY, action.payload)
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLE_VIEW_KEY) as ArticleView ?? ArticleView.DEFAULT
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
      state.isLoading = false
      articlesAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload ?? null
    })
  }
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice
