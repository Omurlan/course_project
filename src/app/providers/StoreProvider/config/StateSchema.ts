import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type AxiosInstance } from 'axios'
import { type ArticleSchema } from 'entities/Article'
import { type AddCommentFormSchema } from 'features/AddCommentForm'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'
import { type ScrollSaveSchema } from 'features/ScrollSave'
import { type ArticlePageSchema } from 'pages/ArticlePage'
import { type rtkApi } from 'shared/api/rtkApi'
import { type ProfileSchema } from 'features/EditableProfileCard'

export interface StateSchema {
  user: UserSchema
  scrollSave: ScrollSaveSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // асинхронные редюсеры
  login?: LoginSchema
  article?: ArticleSchema
  profile?: ProfileSchema
  articlePage?: ArticlePageSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<ErrorType> {
  extra: ThunkExtraArg
  state: StateSchema
  rejectValue: ErrorType
}
