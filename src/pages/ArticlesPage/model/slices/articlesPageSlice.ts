import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { type Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article'
import { type ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ARTICLE_VIEW_KEY } from '@/shared/const/localstorage'
import { type SortOrder } from '@/shared/types'

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
    ids: [],
    page: 1,
    _inited: false,
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    type: ArticleType.ALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_KEY) as ArticleView ?? ArticleView.DEFAULT
      state.view = view

      const limit = view === ArticleView.DEFAULT ? 4 : 9
      state.limit = limit
      state.totalCount = limit
      state._inited = true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state, action) => {
      state.isLoading = true
      state.error = null

      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state)
      }
    })
    builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false

      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload.articles)
      } else {
        articlesAdapter.addMany(state, action.payload.articles)
      }

      state.totalCount = action.payload.totalCount
    })
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload ?? null
    })
  }
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice
