import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { BiHomeAlt2 as HomeIcon, BiNews as NewsIcon } from 'react-icons/bi'
import { AiOutlineInfoCircle as AboutIcon } from 'react-icons/ai'
import { type SidebarItemType } from '../types/sidebar'
import { RoutePath } from '@/shared/const/router'

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemList: SidebarItemType[] = [
      {
        title: 'Главное',
        path: RoutePath.main,
        Icon: HomeIcon
      },
      {
        title: 'О нас',
        path: RoutePath.about,
        Icon: AboutIcon
      }
    ]

    if (userData) {
      sidebarItemList.push(
        {
          title: 'Статьи',
          path: RoutePath.articles,
          Icon: NewsIcon,
          authOnly: true
        }
      )
    }

    return sidebarItemList
  }
)
