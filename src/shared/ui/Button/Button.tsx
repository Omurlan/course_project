import React, { type ComponentProps } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

type Themes = 'clear'

interface ButtonProps extends ComponentProps<'button'> {
  theme?: Themes
}

export const Button: React.FC<ButtonProps> = ({
  className,
  theme,
  children,
  ...rest
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.clear]: theme === 'clear'
      })}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
