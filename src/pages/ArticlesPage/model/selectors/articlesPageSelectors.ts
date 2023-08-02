import { type StateSchema } from 'app/providers/StoreProvider'
import { ArticleView } from 'entities/Article'

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading ?? false
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view ?? ArticleView.DEFAULT
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page ?? 1
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit ?? 9
export const getArticlesPageTotalCount = (state: StateSchema) => state.articlesPage?.totalCount ?? 9
