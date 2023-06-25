import React from 'react'
import styles from './ThemeSwitcher.module.scss'
import cn from 'classnames'
import { useTheme } from 'app/providers/ThemeProvider'
import { BsMoon, BsSun } from 'react-icons/bs'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div role="button" onClick={toggleTheme} className={cn(styles.switcher, className, {
      [styles.dark]: theme === 'dark'
    })}>
      <BsSun className={cn(styles.icon, styles.sun)} />

      <BsMoon className={cn(styles.icon, styles.moon)} />
    </div>
  )
}

export default ThemeSwitcher
