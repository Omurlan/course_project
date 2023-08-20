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
      const Tag = variants[variant]

      return (
        <Tag className={cn(styles.text, variant, className, {
          [styles.primary]: color === 'primary',
          [styles.error]: color === 'error'
        })} {...props}>
          {children}
        </Tag>
      )
    })
