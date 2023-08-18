import React, { type ReactNode } from 'react'
import styles from './Flex.module.scss'
import cn from 'classnames'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap = 1 | 2 | 3 | 4 | 5 | 6

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween
}

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd
}

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
  1: styles.gap1,
  2: styles.gap2,
  3: styles.gap3,
  4: styles.gap4,
  5: styles.gap5,
  6: styles.gap6
}

export interface FlexProps {
  className?: string
  justify?: FlexJustify
  align?: FlexAlign
  direction: FlexDirection
  children: ReactNode
  gap?: FlexGap
  max?: boolean
}

const Flex: React.FC<FlexProps> = (props) => {
  const {
    children,
    className,
    justify = 'start',
    align = 'start',
    direction = 'row',
    gap = 2,
    max = false
  } = props

  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
    max && styles.max
  ]

  return (
    <div className={cn(styles.flex, classes, className)}>
      {children}
    </div>
  )
}

export default Flex
