import React, { type MouseEventHandler, useEffect, useRef } from 'react'
import styles from './Option.module.scss'
import cn from 'classnames'
import { type SelectOption } from '../Select'

interface OptionProps {
  option: SelectOption
  onClick: (value: string) => void
}

export const Option: React.FC<OptionProps> = ({ option: { title, value }, onClick }) => {
  const optionRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const option = optionRef.current
    if (!option) return

    const handleEnterPress = (event: KeyboardEvent) => {
      if ((document.activeElement === option) && event.key === 'Enter') {
        onClick(value)
      }
    }

    option.addEventListener('keydown', handleEnterPress)

    return () => {
      option.removeEventListener('keydown', handleEnterPress)
    }
  }, [value, onClick])

  const handleClick = (clickedValue: string): MouseEventHandler<HTMLLIElement> => () => {
    onClick(clickedValue)
  }

  return (
    <li
      className={styles.option}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
    >
      {title}
    </li>
  )
}
