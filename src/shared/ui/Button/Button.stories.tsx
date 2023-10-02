import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { Theme } from '@/shared/const/theme'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default button'
  }
}

export const DefaultDark: Story = {
  args: {
    children: 'Default button'
  },
  decorators: [
    ThemeDecorator(Theme.DARK)
  ]
}
