import React, { useMemo, memo } from 'react'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { useSidebar } from '@/shared/lib/hooks/useSidebar/useSidebar'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { HStack, VStack } from '@/shared/ui/Stack'

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
    <aside
      data-testid="sidebar"
      className={cn(styles.sidebar, {
        [styles.collapsed]: !open
      })}
    >
      <span onClick={toggleState} className={styles.background} />

      <VStack role="navigation" className={styles.list}>
        {sidebarList}
      </VStack>

      <HStack justify="center" className={styles.switchers}>
        <ThemeSwitcher />
      </HStack>
    </aside>
  )
})
