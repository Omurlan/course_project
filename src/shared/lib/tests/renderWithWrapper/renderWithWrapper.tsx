import React, { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { render } from '@testing-library/react'
import { type ReducersMapObject } from '@reduxjs/toolkit'

export interface renderWithWrapperOptions {
  path?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const renderWithWrapper = (component: ReactNode, options: renderWithWrapperOptions = {}) => {
  return render(
    <MemoryRouter>
      <StoreProvider initialState={options.initialState} asyncReducers={options.asyncReducers}>
        {component}
      </StoreProvider>
    </MemoryRouter>
  )
}
