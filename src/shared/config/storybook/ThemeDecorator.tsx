import React from 'react'
import cn from 'classnames'
import '@/app/styles/index.scss'
import { type Decorator } from '@storybook/react'
import {Theme} from "@/shared/const/theme";

interface ThemeDecoratorProps {

}

export const ThemeDecorator = (theme: Theme): Decorator => (story): JSX.Element => {
  return <div className="app">
    {story()}
  </div>
}
