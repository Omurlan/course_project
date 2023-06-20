import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUsername'
import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'

export function createReduxStore (initialState?: StateSchema): ToolkitStore<StateSchema> {
  const rootReducer: ReducersMapObject<StateSchema> = {
    user: userReducer,
    login: loginReducer
  }

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: JSON.parse(__IS_DEV__)
  })
}
