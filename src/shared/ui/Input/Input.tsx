import React, { type ComponentProps } from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'

interface InputProps extends ComponentProps<'input'> {
  error?: boolean
  label?: string
  helperText?: string
}

export const Input: React.FC<InputProps> = ({ className, helperText = '', label = '', error = false, ...rest }) => {
  return (
    <span className={styles.inputWrapper}>
      {label && (
        <label className={styles.label}>{label}</label>
      )}

      <input className={cn(styles.input, className, {
        [styles.error]: error
      })} {...rest} />
      {helperText && (
        <span className={cn(styles.helperText, {
          [styles.error]: error
        })}>{helperText}</span>
      )}
    </span>
  )
}

export default Input
