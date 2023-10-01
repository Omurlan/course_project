import React, { memo, useCallback, useState } from 'react'
import styles from './Rating.module.scss'
import { AiOutlineStar as StarIcon } from 'react-icons/ai'
import cn from 'classnames'

interface RatingProps {
  className?: string
  value: number
  onRate: (value: number) => void
  size?: number
  disabled?: boolean
}

const stars = [1, 2, 3, 4, 5]

export const Rating = memo((props: RatingProps) => {
  const { onRate, className, value = 0, disabled = false } = props

  const [hoveredValue, setHoveredValue] = useState(0)

  const handleRate = useCallback((value: number) => () => {
    if (!disabled) {
      onRate(value)
    }
  }, [disabled])

  const handleMouseEnter = useCallback((value: number) => () => {
    if (!disabled) {
      setHoveredValue(value)
    }
  }, [disabled])

  const handleMouseLeave = useCallback((): void => {
    if (!disabled) {
      setHoveredValue(0)
    }
  }, [disabled])

  return (
    <div className={cn(styles.rating, className)}>
      {stars.map((number) => (
        <StarIcon
          onMouseEnter={handleMouseEnter(number)}
          onMouseLeave={handleMouseLeave}
          onClick={handleRate(number)}
          key={number}
          className={cn(styles.star, {
            [styles.fill]: number <= value,
            [styles.hover]: number > value && number <= hoveredValue
          })} />
      ))}
    </div>
  )
})
