import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext
} from '@/app/providers/ThemeProvider/lib/ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    window.document.body.className = newTheme
  }

  return {
    theme,
    toggleTheme
  }
}
