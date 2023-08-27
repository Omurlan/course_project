import React, { useState, memo } from 'react'
import styles from './Navbar.module.scss'
import cn from 'classnames'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSidebar } from 'app/providers/SidebarProvider'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User'
import { AppLink } from 'shared/ui/Link/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown, type DropdownItem } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { HStack } from 'shared/ui/Stack'
import { getUserRoles } from 'entities/User/model/selectors/roleSelectors'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { toggleState } = useSidebar()
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const authData = useSelector(getUserAuthData)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleCloseModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleAuth = () => {
    if (authData) {
      dispatch(userActions.logout())
    } else {
      setModalIsOpen(true)
    }
  }

  const isAdminPanelAvailable = isAdmin || isManager

  const items: DropdownItem[] = [
    {
      content: 'Профиль',
      href: authData && RoutePath.profile + authData.id
    },
    {
      content: 'Выйти',
      onClick: handleAuth
    }
  ]

  if (isAdminPanelAvailable) {
    items.unshift(
      {
        content: 'Админ панель',
        href: RoutePath.admin_panel
      }
    )
  }

  return (
    <header className={cn(styles.navbar, className)}>
      <HStack justify="between" align="center" className={styles.stack}>
        <GiHamburgerMenu onClick={toggleState} className={styles.burgerIcon} />

        <HStack align="center" gap={4}>
          <AppLink to={RoutePath.article_create}>Создать статью</AppLink>

          {authData && (
            <Dropdown
              direction="bottom left"
              items={items}
              trigger={<Avatar size={30} src={authData?.avatar} />}
            />
          )}

          {!authData && (
            <Button size="small" onClick={handleAuth}>
              Войти
            </Button>
          )}
        </HStack>

      </HStack>
      <LoginModal isOpen={modalIsOpen} onClose={handleCloseModal} />

    </header>
  )
})
