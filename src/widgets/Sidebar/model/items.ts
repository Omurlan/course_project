import { type IconType } from 'react-icons'
import { BiHomeAlt2 as HomeIcon, BiNews as NewsIcon } from 'react-icons/bi'
import { AiOutlineInfoCircle as AboutIcon } from 'react-icons/ai'
import { CgProfile as ProfileIcon } from 'react-icons/cg'

import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  title: string
  path: string
  Icon: IconType
  authOnly?: boolean
}

export const sidebarItemsList: SidebarItemType[] = [
  {
    title: 'Главное',
    path: RoutePath.main,
    Icon: HomeIcon
  },
  {
    title: 'О нас',
    path: RoutePath.about,
    Icon: AboutIcon
  },
  {
    title: 'Статьи',
    path: RoutePath.articles,
    Icon: NewsIcon,
    authOnly: true
  },
  {
    title: 'Профиль',
    path: RoutePath.profile,
    Icon: ProfileIcon,
    authOnly: true
  }
]
