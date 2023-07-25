import React, { type ComponentProps, memo, useRef } from 'react'
import styles from './TextArea.module.scss'
import cn from 'classnames'
import useAutosizeTextArea from 'shared/ui/TextArea/useAutosize'

interface TextAreaProps extends ComponentProps<'textarea'> {
  error?: boolean
  label?: string
  helperText?: string
}

export const TextArea = memo((props: TextAreaProps) => {
  const {
    className,
    helperText = '',
    label = '',
    value,
    error = false,
    ...rest
  } = props

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(textAreaRef.current, value)

  return (
    <div className={cn(styles.textAreaWrapper, className)}>
      {label && (
        <label className={styles.label}>{label}</label>
      )}

      <textarea ref={textAreaRef} value={value} className={cn(styles.textarea, className, {
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
