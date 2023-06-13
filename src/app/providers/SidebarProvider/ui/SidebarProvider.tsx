import { type FC, useState } from 'react'
import { SidebarContext } from 'app/providers/SidebarProvider/lib/SidebarContext'

export const SidebarProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  const toggleState = (): void => {
    setOpen(!open)
  }

  return (
    <SidebarContext.Provider value={{ open, toggleState }}>
      {children}
    </SidebarContext.Provider>
  )
}
