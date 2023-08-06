import React, { type MouseEventHandler, useEffect, useRef, useState } from 'react'
import styles from './Select.module.scss'
import cn from 'classnames'
import { SlArrowDown } from 'react-icons/sl'
import { Option } from './Option/Option'

export interface SelectOption<T extends string = string> {
  value: T
  title: string
}

export interface ChangeEventSelect<T extends string = string> {
  value: T
  name: string
}

interface DropdownProps<T extends string > {
  className?: string
  selected: string | null
  options: Array<SelectOption<T>>
  placeholder?: string
  helperText?: string
  disabled?: boolean
  name?: string
  label?: string
  error?: boolean
  onChange?: (selected: ChangeEventSelect<T>) => void
  onClose?: () => void
}

export const Select = <T extends string>(props: DropdownProps<T>) => {
  const { selected, options, placeholder, className, helperText, disabled, name = '', label, error = false, onChange, onClose } = props

  const [isOpen, setIsOpen] = useState(false)

  const rootRef = useRef<HTMLDivElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const placeholderEl = placeholderRef.current
    if (!placeholderEl) return

    const handleClick = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setIsOpen((prev) => !prev)
      }
    }

    placeholderEl.addEventListener('keydown', handleClick)

    return () => {
      placeholderEl.removeEventListener('keydown', handleClick)
    }
  }, [])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event

      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.()
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [isOpen, onClose])

  const handleOptionClick = (value: string) => {
    setIsOpen(false)
    onChange?.({ value: value as T, name })
  }

  const handlePlaceholderClick: MouseEventHandler<HTMLDivElement> = () => {
    if (!disabled) setIsOpen((prev) => !prev)
  }

  return (
    <div className={cn(styles.select, className)}>
      {label && (
        <label className={styles.label}>{label}</label>
      )}
      <div ref={rootRef} className={cn(styles.selectContent, {
        [styles.active]: isOpen
      })}>

        <SlArrowDown className={cn(styles.arrowIcon, {
          [styles.disabled]: disabled
        })} />

        <div
          onClick={handlePlaceholderClick}
          className={cn(styles.placeholder, {
            [styles.error]: error,
            [styles.empty]: !selected,
            [styles.disabled]: disabled
          })}
        >
          {selected ?? placeholder}
        </div>

        {isOpen && (
          <ul className={styles.list}>
            {options.map((option) => (
              <Option
                key={option.value}
                option={option}
                onClick={handleOptionClick}
              />
            ))}
          </ul>
        )}
      </div>

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
}
