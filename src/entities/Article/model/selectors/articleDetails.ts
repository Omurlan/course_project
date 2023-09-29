import { type StateSchema } from '@/app/providers/StoreProvider'

export const getArticleData = (state: StateSchema) => state.article?.data
export const getArticleIsLoading = (state: StateSchema) => state.article?.isLoading ?? false
export const getArticleError = (state: StateSchema) => state.article?.error ?? null
