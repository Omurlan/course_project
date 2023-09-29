import React, { memo } from 'react'
import styles from './Overlay.module.scss'
import cn from 'classnames'

interface OverlayProps {
  className?: string
  onClick?: () => void
}

export const Overlay = memo(({ className, onClick }: OverlayProps) => {
  return (
    <div onClick={onClick} className={cn(styles.overlay, className)}></div>
  )
})
