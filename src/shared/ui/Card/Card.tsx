import React, { type ComponentProps, memo } from 'react'
import styles from './Card.module.scss'
import cn from 'classnames'

interface CardProps extends ComponentProps<'div'> {}

export const Card = memo(({ className, children, ...rest }: CardProps) => {
  return (
    <div className={cn(styles.card, className)} {...rest}>
      {children}
    </div>
  )
})
