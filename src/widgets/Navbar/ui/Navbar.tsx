import React from 'react'
import styles from './Navbar.module.scss'
import cn from 'classnames'
import AppLink from 'shared/ui/Link/AppLink'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSidebar } from 'app/providers/SidebarProvider'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { toggleState } = useSidebar()

  return (
    <div className={cn(styles.navbar, className)}>
      <GiHamburgerMenu onClick={toggleState} className={styles.burgerIcon} />

    </div>
  )
}
