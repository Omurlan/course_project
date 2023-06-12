import React from 'react'
import cn from 'classnames'
import 'app/styles/index.scss'
import { type Theme } from 'app/providers/ThemeProvider'
import { type Decorator } from '@storybook/react'

interface ThemeDecoratorProps {

}

export const ThemeDecorator = (theme: Theme): Decorator => (story): JSX.Element => {
  return <div className={`app ${theme}`}>
    {story()}
  </div>
}
