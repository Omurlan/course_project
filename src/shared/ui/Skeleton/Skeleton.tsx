import React, { type CSSProperties } from 'react'
import styles from './Skeleton.module.scss'
import cn from 'classnames'

interface SceletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton: React.FC<SceletonProps> = ({ border, width, height, className }) => {
  const style: CSSProperties = {
    width,
    height,
    borderRadius: border
  }

  return (
    <div className={cn(styles.skeleton, className)} style={style}></div>
  )
}
