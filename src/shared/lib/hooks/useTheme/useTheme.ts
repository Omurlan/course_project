import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import { Theme } from '../../../const/theme'
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage'

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
