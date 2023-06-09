import React from 'react'
import styles from './ThemeSwitcher.module.scss'
import cn from 'classnames'
import { useTheme } from 'app/providers/ThemeProvider'

import LightIcon from 'shared/assets/icons/light.png'
import DarkIcon from 'shared/assets/icons/dark.png'
import Button from 'shared/ui/Button/Button'

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
      {theme === 'dark' && <img src={DarkIcon} alt="Dark mode" />}
      {theme === 'light' && <img src={LightIcon} alt="Light mode" />}
    </Button>
  )
}

export default ThemeSwitcher
