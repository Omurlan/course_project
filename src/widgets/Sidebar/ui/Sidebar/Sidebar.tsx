import React, { useMemo, memo } from 'react'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { useSidebar } from 'app/providers/SidebarProvider'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

interface SidebarProps {}

export const Sidebar = memo(() => {
  const { open, toggleState } = useSidebar()

  const sidebarItemList = useSelector(getSidebarItems)

  const sidebarList = useMemo(() => (
    sidebarItemList.map((route) => (
      <SidebarItem key={route.path} item={route} />
    ))
  )
  , [sidebarItemList])

  return (
    <menu
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
    </menu>
  )
})
