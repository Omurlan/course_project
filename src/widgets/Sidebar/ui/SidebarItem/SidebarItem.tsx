import React, { memo } from 'react'
import styles from './SidebarItem.module.scss'
import cn from 'classnames'
import { AppLink } from '@/shared/ui/Link/AppLink'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { type SidebarItemType } from '../../model/types/sidebar'

interface SidebarItemProps {
  item: SidebarItemType
}

export const SidebarItem = memo(({ item }: SidebarItemProps) => {
  const { path, title, Icon } = item
  const { pathname } = useLocation()
  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

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
