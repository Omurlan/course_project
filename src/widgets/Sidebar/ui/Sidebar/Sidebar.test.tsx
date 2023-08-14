import { screen } from '@testing-library/react'
import { Sidebar } from '../Sidebar/Sidebar'
import { renderWithWrapper } from 'shared/lib/tests/renderWithWrapper/renderWithWrapper'

describe('sidebar', () => {
  test('exist', () => {
    renderWithWrapper(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
