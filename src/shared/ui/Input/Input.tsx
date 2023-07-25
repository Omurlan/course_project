import React, { type ComponentProps, memo } from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'

interface InputProps extends ComponentProps<'input'> {
  error?: boolean
  label?: string
  helperText?: string
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    helperText = '',
    label = '',
    error = false,
    ...rest
  } = props

  return (
    <div className={cn(styles.inputWrapper, className)}>
      {label && (
        <label className={styles.label}>{label}</label>
      )}

      <input className={cn(styles.input, className, {
        [styles.error]: error
      })} {...rest} />

      {helperText && (
        <span
          className={cn(styles.helperText, {
            [styles.error]: error
          })}
        >
          {helperText}
        </span>
      )}
    </div>
  )
})
