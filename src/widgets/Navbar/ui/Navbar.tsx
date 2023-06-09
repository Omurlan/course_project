import React from 'react'
import styles from './Navbar.module.scss'
import cn from 'classnames'
import AppLink from 'shared/ui/Link/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(styles.navbar, className)}>
      <AppLink to="/">Главная</AppLink>
      <AppLink to="/about">О сайте</AppLink>
    </div>
  )
}
