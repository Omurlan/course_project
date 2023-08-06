import {
  createEntityAdapter,
  createSlice, type PayloadAction
} from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type ArticleCommentsSchema } from '../types/articleCommentsSchema'
import {
  fetchCommentsByArticleId
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

export const getArticleComments =
    commentsAdapter.getSelectors<StateSchema>((state) => state.articleComments ?? commentsAdapter.getInitialState())

const articlePageCommentsSlice = createSlice({
  name: 'articlePageComments',
  initialState: commentsAdapter.getInitialState<ArticleCommentsSchema>({
    isLoading: false,
    error: null,
    ids: [],
    entities: {}
  }),
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
      state.isLoading = false
      commentsAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload ?? null
    })
  }
})

export const { reducer: articleCommentsReducer, actions: articleCommentsActions } = articlePageCommentsSlice
