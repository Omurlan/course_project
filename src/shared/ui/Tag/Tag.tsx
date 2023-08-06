import React, { type ComponentProps } from 'react'
import styles from './Tag.module.scss'
import cn from 'classnames'

interface TagProps<T extends string> extends Omit<ComponentProps<'button'>, 'onClick'> {
  active?: boolean
  value: T
  onClick: (value: T) => void
}

export const Tag = <T extends string>(props: TagProps<T>) => {
  const { className, active = false, value, children, onClick, ...rest } = props

  const handleClick = () => {
    onClick(value)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(styles.tag, className, {
        [styles.active]: active
      })} {...rest}>
      {children}
    </button>
  )
}
