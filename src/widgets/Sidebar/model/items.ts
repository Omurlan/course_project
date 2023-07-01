import { type IconType } from 'react-icons'
import { BiHomeAlt2 as HomeIcon } from 'react-icons/bi'
import { AiOutlineInfoCircle as AboutIcon } from 'react-icons/ai'
import { CgProfile as ProfileIcon } from 'react-icons/cg'

import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  title: string
  path: string
  Icon: IconType
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
    title: 'Профиль',
    path: RoutePath.profile,
    Icon: ProfileIcon
  }
]
