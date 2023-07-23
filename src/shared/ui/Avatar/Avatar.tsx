import React, { type ComponentProps, memo, useMemo } from 'react'
import styles from './Avatar.module.scss'
import cn from 'classnames'

interface AvatarProps extends ComponentProps<'img'> {

}

export const Avatar = memo(({ className, width, height, style, ...rest }: AvatarProps) => {
  const size = useMemo(() => ({
    width,
    height
  }), [width, height])

  return (
    <img style={{ ...size, ...style }} className={cn(styles.avatar, className)} {...rest} />
  )
})
