import React, { useEffect } from 'react'
import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxWithManager, type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
}

interface AsyncReducerLoaderProps {
  reducers: ReducerList
  destroyOnUnmount?: boolean
}

export const AsyncReducer: React.FC<AsyncReducerLoaderProps> = ({ reducers, children, destroyOnUnmount = false }) => {
  const dispatch = useDispatch()
  const store = useStore() as ReduxWithManager

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      store.reducerManager.add(key as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${key} reducer` })
    })

    return () => {
      if (destroyOnUnmount) {
        Object.entries(reducers).forEach(([key]) => {
          store.reducerManager.remove(key as StateSchemaKey)
          dispatch({ type: `@DESTROY ${key} reducer` })
        })
      }
    }
  }, [])

  return <>{children}</>
}
