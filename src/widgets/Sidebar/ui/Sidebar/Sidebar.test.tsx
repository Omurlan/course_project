import { screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderWithRouter } from 'shared/config/storybook/renderWithRouter'

describe('sidebar', () => {
  test('exist', () => {
    renderWithRouter(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
