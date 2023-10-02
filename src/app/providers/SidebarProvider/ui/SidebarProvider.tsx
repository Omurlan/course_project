import { type FC, type PropsWithChildren, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { SidebarContext } from '@/shared/lib/context/SidebarContext'

export const SidebarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(true)

  const isLaptop = useMediaQuery({ query: '(max-width: 860px)' })

  useEffect(() => {
    if (isLaptop) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [isLaptop])

  const toggleState = (): void => {
    setOpen(!open)
  }

  return (
    <SidebarContext.Provider value={{ open, toggleState }}>
      {children}
    </SidebarContext.Provider>
  )
}
