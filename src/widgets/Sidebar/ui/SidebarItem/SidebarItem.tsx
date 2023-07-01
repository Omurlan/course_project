import React, { memo } from 'react'
import styles from './SidebarItem.module.scss'
import cn from 'classnames'
import { AppLink } from 'shared/ui/Link/AppLink'
import { type SidebarItemType } from '../../model/items'
import { useLocation } from 'react-router-dom'

interface SidebarItemProps {
  item: SidebarItemType
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => {
  const { path, title, Icon } = item
  const { pathname } = useLocation()

  return (
    <li className={styles.item}>
      <AppLink className={cn(styles.link, {
        [styles.active]: path === pathname
      })} to={path}>
        <Icon />
        {title}
      </AppLink>
    </li>
  )
})
