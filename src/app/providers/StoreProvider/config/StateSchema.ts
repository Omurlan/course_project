import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import {
  type AnyAction,
  type CombinedState,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type To } from 'history'
import { type NavigateOptions } from 'react-router'
import { type ArticleSchema } from 'entities/Article'
import { type ArticleCommentsSchema } from 'pages/ArticlePage/model/types/articleCommentsSchema'
import { type AddCommentFormSchema } from 'features/AddCommentForm'

export interface StateSchema {
  user: UserSchema

  // асинхронные редюсеры
  login?: LoginSchema
  article?: ArticleSchema
  articleComments?: ArticleCommentsSchema
  profile?: ProfileSchema
  addCommentForm?: AddCommentFormSchema
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
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<ErrorType> {
  extra: ThunkExtraArg
  state: StateSchema
  rejectValue: ErrorType
}
