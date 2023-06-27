import { combineReducers, type ReducersMapObject } from '@reduxjs/toolkit'
import { type ReducerManager, type StateSchema, type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'

export function createReducerManager (initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state, action) => {
      if (keysToRemove.length > 0) {
        state = { ...state }

        keysToRemove.forEach((key) => {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete state[key]
        })
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key, reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key) => {
      if (!key || !reducers[key]) {
        return
      }

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    }
  }
}
