import { useContext } from 'react'
import { SidebarContext, type SidebarContextProps } from '../../context/SidebarContext'

export const useSidebar = (): SidebarContextProps => {
  const { open, toggleState } = useContext(SidebarContext)

  return {
    open, toggleState
  }
}
