import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articlePage?.comments?.isLoading

export const getArticleCommentsError = (state: StateSchema) =>
  state.articlePage?.comments?.error
