import { createContext } from 'react'

export interface SidebarContextProps {
  open: boolean
  toggleState: () => void
}

export const SidebarContext = createContext<SidebarContextProps>({
  open: false,
  toggleState: () => {}
})
