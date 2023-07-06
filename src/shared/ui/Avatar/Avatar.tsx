import React, { type ComponentProps, memo } from 'react'
import styles from './Avatar.module.scss'
import cn from 'classnames'

interface AvatarProps extends ComponentProps<'img'> {
}

export const Avatar = memo(({ className, ...rest }: AvatarProps) => {
  return (
    <img className={cn(styles.avatar, className)} {...rest} />
  )
})
