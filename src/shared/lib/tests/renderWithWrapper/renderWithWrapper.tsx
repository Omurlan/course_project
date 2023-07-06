import React, { type ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { render } from '@testing-library/react'

interface renderWithWrapperOptions {
  path?: string
  initialState?: DeepPartial<StateSchema>
}

export const renderWithWrapper = (component: ReactNode, options: renderWithWrapperOptions = {}) => {
  return render(
    <MemoryRouter>
      <StoreProvider initialState={options.initialState}>
        {component}
      </StoreProvider>
    </MemoryRouter>
  )
}
