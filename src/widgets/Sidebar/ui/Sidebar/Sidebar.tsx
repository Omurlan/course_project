import React, { useMemo, memo } from 'react'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { useSidebar } from 'app/providers/SidebarProvider'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { sidebarItemsList } from '../../model/items'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface SidebarProps {}

export const Sidebar = memo(() => {
  const { open, toggleState } = useSidebar()

  const sidebarList = useMemo(() => (
    sidebarItemsList.map((route) => (
      <SidebarItem key={route.path} item={route} />
    ))
  )
  , [])

  return (
    <div
        data-testid="sidebar"
      className={cn(styles.sidebar, {
        [styles.collapsed]: !open
      })}
    >
      <span onClick={toggleState} className={styles.background} />

      <ul className={styles.list}>
        {sidebarList}
      </ul>

      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
})
