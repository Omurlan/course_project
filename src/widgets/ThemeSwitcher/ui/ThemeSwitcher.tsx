import React from 'react'
import styles from './ThemeSwitcher.module.scss'
import cn from 'classnames'
import { useTheme } from 'app/providers/ThemeProvider'
import Button from 'shared/ui/Button/Button'
import { BiToggleLeft as ToggleOffIcon, BiToggleRight as ToggleOnIcon } from 'react-icons/bi'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme="clear"
      onClick={toggleTheme}
      className={cn(styles.button, className)}
    >
      <span>{theme === 'dark' ? 'Темная' : 'Светлая'}</span>
      {theme === 'dark' && <ToggleOnIcon className={styles.icon} /> }
      {theme === 'light' && <ToggleOffIcon className={styles.icon} />}
    </Button>
  )
}

export default ThemeSwitcher
