import React, { type ReactNode } from 'react'
import cn from 'classnames'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: StateSchema
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState }) => {
  const store = createReduxStore(initialState)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider
