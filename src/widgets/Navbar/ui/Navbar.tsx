import React, { useState, memo, useCallback } from 'react'
import styles from './Navbar.module.scss'
import cn from 'classnames'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSidebar } from '@/shared/lib/hooks/useSidebar/useSidebar'
import { Button } from '@/shared/ui/Button'
import { LoginModal } from '@/features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { AppLink } from '@/shared/ui/AppLink'
import { HStack } from '@/shared/ui/Stack'
import { AvatarDropdown } from '@/features/AvatarDropdown'
import { NotificationDropdown } from '@/features/NotificationDropdown'
import { RoutePath } from '@/shared/const/router'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { toggleState } = useSidebar()

  const authData = useSelector(getUserAuthData)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleCloseModal = (): void => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleLogin = useCallback(() => {
    setModalIsOpen(true)
  }, [])

  return (
    <header className={cn(styles.navbar, className)}>
      <HStack justify="between" align="center" className={styles.stack}>
        <GiHamburgerMenu onClick={toggleState} className={styles.burgerIcon} />

        <HStack align="center" gap={4}>
          <AppLink to={RoutePath.article_create}>Создать статью</AppLink>

          <NotificationDropdown />
          <AvatarDropdown />

          {!authData && (
            <Button size="small" onClick={handleLogin}>
              Войти
            </Button>
          )}
        </HStack>

      </HStack>
      <LoginModal isOpen={modalIsOpen} onClose={handleCloseModal} />

    </header>
  )
})
