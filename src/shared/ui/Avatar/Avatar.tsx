import React, { type ComponentProps, memo, useMemo } from 'react'
import styles from './Avatar.module.scss'
import cn from 'classnames'

interface AvatarProps extends ComponentProps<'img'> {
  size?: number
}

export const Avatar = memo(({ className, size, style, ...rest }: AvatarProps) => {
  const sizes = useMemo(() => ({
    width: size,
    height: size
  }), [size])

  return (
    <img style={{ ...sizes, ...style }} className={cn(styles.avatar, className)} {...rest} />
  )
})
