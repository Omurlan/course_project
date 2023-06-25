import React from 'react'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { ThemeSwitcher } from '../../../ThemeSwitcher'
import AppLink from 'shared/ui/Link/AppLink'
import { BiHomeAlt2 as HomeIcon } from 'react-icons/bi'
import { AiOutlineInfoCircle as AboutIcon } from 'react-icons/ai'
import { useSidebar } from 'app/providers/SidebarProvider'
import { type IconType } from 'react-icons'
import { useLocation } from 'react-router-dom'

interface Route {
  title: string
  path: string
  Icon: IconType
}

const sidebarRoutes: Route[] = [
  {
    title: 'Главное',
    path: '/',
    Icon: HomeIcon
  },
  {
    title: 'О нас',
    path: '/about',
    Icon: AboutIcon
  }
]

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  const { pathname } = useLocation()

  const { open, toggleState } = useSidebar()

  return (
    <div
        data-testid="sidebar"
      className={cn(styles.sidebar, {
        [styles.collapsed]: !open
      })}
    >
      <span onClick={toggleState} className={styles.background} />

      <ul className={styles.list}>
        {sidebarRoutes.map(({ Icon, path, title }) => (
          <li key={path}>
            <AppLink key={title} className={cn(styles.item, {
              [styles.active]: path === pathname
            })} to={path}>
              <Icon />
              {title}
            </AppLink>
          </li>
        ))}
      </ul>

      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Sidebar
