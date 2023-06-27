import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager'

export function createReduxStore (initialState?: StateSchema): ToolkitStore<StateSchema> {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer
  }

  const reducerManager = createReducerManager(rootReducer)

  const store = configureStore<StateSchema>({
    // @ts-expect-error test
    reducer: reducerManager.reduce,
    devTools: JSON.parse(__IS_DEV__),
    preloadedState: initialState
  })

  // @ts-expect-error test
  store.reducerManager = reducerManager

  // @ts-expect-error test
  return store
}
