import { MemoryRouter } from 'react-router-dom'
import { type ReactNode } from 'react'
import { render, type RenderResult } from '@testing-library/react'

export const renderWithRouter = (children: ReactNode): RenderResult => {
  return render(
    <MemoryRouter initialEntries={['/']}>
      {children}
    </MemoryRouter>
  )
}
