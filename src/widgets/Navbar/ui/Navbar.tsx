import React, { useState, memo } from 'react'
import styles from './Navbar.module.scss'
import cn from 'classnames'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSidebar } from 'app/providers/SidebarProvider'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { toggleState } = useSidebar()
  const dispatch = useDispatch()

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

  console.log(authData)

  return (
    <div className={cn(styles.navbar, className)}>
      <GiHamburgerMenu onClick={toggleState} className={styles.burgerIcon} />

      <Button size="small" onClick={handleAuth}>
        {authData ? 'Выйти' : 'Войти'}
      </Button>

      <LoginModal isOpen={modalIsOpen} onClose={handleCloseModal} />
    </div>
  )
})
