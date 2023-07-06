import React, { type ReactNode, useMemo } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { type StateSchema } from '../config/StateSchema'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children?: ReactNode
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children, initialState }) => {
  const navigate = useNavigate()

  const store = useMemo(() => createReduxStore(initialState as StateSchema, navigate), [])

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StoreProvider
