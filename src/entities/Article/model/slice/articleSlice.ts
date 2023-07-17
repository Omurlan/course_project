import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleSchema } from '../types/articleSchema'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { type Article } from '../types/article'

const initialState: ArticleSchema = {
  data: undefined,
  error: null,
  isLoading: false
}

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export const { actions: articleActions, reducer: articleReducer } = articleSlice
