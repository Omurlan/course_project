import React, { type ReactNode, useEffect } from 'react'
import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxWithManager, type StateSchema, type StateSchemaKey } from '@/app/providers/StoreProvider'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface AsyncReducerLoaderProps {
  reducers: ReducerList
  destroyOnUnmount?: boolean
  children: ReactNode
}

export const AsyncReducer: React.FC<AsyncReducerLoaderProps> = ({ reducers, children, destroyOnUnmount = false }) => {
  const dispatch = useDispatch()
  const store = useStore() as ReduxWithManager

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([key, reducer]) => {
      const mounted = mountedReducers[key as StateSchemaKey]

      if (!mounted) {
        store.reducerManager.add(key as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${key} reducer` })
      }
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
