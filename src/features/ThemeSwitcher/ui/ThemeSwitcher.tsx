import React, { memo } from 'react'
import styles from './ThemeSwitcher.module.scss'
import cn from 'classnames'
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme'
import { BsMoon, BsSun } from 'react-icons/bs'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div role="button" onClick={toggleTheme} className={cn(styles.switcher, className, {
      [styles.dark]: theme === 'dark'
    })}>
      <BsSun className={cn(styles.icon, styles.sun)} />

      <BsMoon className={cn(styles.icon, styles.moon)} />
    </div>
  )
})
