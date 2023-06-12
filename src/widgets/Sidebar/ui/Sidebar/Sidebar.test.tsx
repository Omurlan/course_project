import { render, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'

describe('sidebar', () => {
  test('exist', () => {
    render(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
