import React, { type ComponentProps } from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'

interface InputProps extends ComponentProps<'input'> {
  error?: boolean
  label?: string
  helperText?: string
}

const ForwardedInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
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

      <input ref={ref} className={cn(styles.input, className, {
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

export const Input = React.memo(ForwardedInput)
