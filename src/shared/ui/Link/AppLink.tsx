import React from 'react'
import styles from './AppLink.module.scss'
import cn from 'classnames'
import { Link, type LinkProps, NavLink } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...rest
  } = props

  return (
    <Link
      to={to}
      className={cn(styles.link, styles.primary, className, {
        [styles.secondary]: theme === 'secondary'
      })}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default AppLink
