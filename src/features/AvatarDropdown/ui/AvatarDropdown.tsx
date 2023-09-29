import React, { memo } from 'react'
import { Dropdown } from '@/shared/ui/Popups'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { type DropdownItem } from '@/shared/ui/Popups/ui/Dropdown/Dropdown'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'

interface AvatarButtonProps {
  className?: string
}

export const AvatarDropdown = memo(({ className }: AvatarButtonProps) => {
  const authData = useSelector(getUserAuthData)
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const dispatch = useDispatch()

  if (!authData) {
    return null
  }

  const handleLogout = (): void => {
    dispatch(userActions.logout())
  }

  const items: DropdownItem[] = [
    {
      content: 'Профиль',
      href: authData && RoutePath.profile + authData.id
    },
    {
      content: 'Выйти',
      onClick: handleLogout
    }
  ]

  const isAdminPanelAvailable = isAdmin || isManager

  if (isAdminPanelAvailable) {
    items.unshift(
      {
        content: 'Админ панель',
        href: RoutePath.admin_panel
      }
    )
  }

  return (
    <Dropdown
      className={className}
      direction="bottom left"
      items={items}
      trigger={<Avatar size={30} src={authData?.avatar} />}
    />
  )
})
