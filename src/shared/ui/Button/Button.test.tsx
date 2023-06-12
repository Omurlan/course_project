import Button from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'

describe('button', () => {
  test('just button', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('just button', () => {
    render(<Button theme="clear">Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
