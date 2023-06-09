import React, { type ComponentProps } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

type Themes = 'clear'

interface ButtonProps extends ComponentProps<'button'> {
  theme?: Themes
  variant?: 'neutral' | 'default' | 'outline' | 'ghost'
  size?: 'small' | 'default'
}

export const Button = ({
  className,
  theme,
  size = 'default',
  variant = 'default',
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.small]: size === 'small',
        [styles.neutral]: variant === 'neutral',
        [styles.outline]: variant === 'outline',
        [styles.ghost]: variant === 'ghost',
        [styles.default]: variant === 'default'
      })}
      {...rest}
    >
      {children}
    </button>
  )
}
