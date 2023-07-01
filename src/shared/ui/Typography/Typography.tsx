import React, { type ComponentProps, memo } from 'react'
import styles from './Typography.module.scss'
import cn from 'classnames'

type Variants = 'heading' | 'subheading' | 'body' | 'caption'
type Tags = 'h1' | 'h3' | 'p'

const variants: Record<Variants, Tags> = {
  heading: 'h1',
  subheading: 'h3',
  body: 'p',
  caption: 'p'
}

type Colors = 'error' | 'default' | 'primary'

interface TypographyProps extends ComponentProps<'p'> {
  variant: Variants
  color?: Colors
}

export const Typography =
    memo(({ variant, className, children, color = 'default', ...props }: TypographyProps) => {
      const Component = variants[variant]

      return (
        <Component className={cn(styles.text, className, {
          [styles.heading]: variant === 'heading',
          [styles.subheading]: variant === 'subheading',
          [styles.body]: variant === 'body',
          [styles.caption]: variant === 'caption',
          [styles.primary]: color === 'primary',
          [styles.error]: color === 'error'
        })} {...props}>
          {children}
        </Component>
      )
    })
