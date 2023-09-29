import { useContext } from 'react'
import {
  SidebarContext,
  type SidebarContextProps
} from '@/app/providers/SidebarProvider/lib/SidebarContext'

export const useSidebar = (): SidebarContextProps => {
  const { open, toggleState } = useContext(SidebarContext)

  return {
    open, toggleState
  }
}
