import React, { useCallback, useState } from 'react'
import styles from './Navbar.module.scss'
import cn from 'classnames'
import AppLink from 'shared/ui/Link/AppLink'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSidebar } from 'app/providers/SidebarProvider'
import Button from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { toggleState } = useSidebar()

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleCloseModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handelShowModal = () => {
    setModalIsOpen(true)
  }

  return (
    <div className={cn(styles.navbar, className)}>
      <GiHamburgerMenu onClick={toggleState} className={styles.burgerIcon} />

      <Button onClick={handelShowModal}>Войти</Button>

      <LoginModal isOpen={modalIsOpen} onClose={handleCloseModal} />
    </div>
  )
}
