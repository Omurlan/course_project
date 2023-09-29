import React, { memo, type ReactNode } from 'react'
import styles from './Drawer.module.scss'
import cn from 'classnames'
import { Portal } from '@headlessui/react'
import { Overlay } from '../Overlay/Overlay'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
  const { children, onClose, isOpen, className } = props

  return (
    <Portal>
      <div className={cn(styles.drawer, className, {
        [styles.opened]: isOpen
      })}>
        <Overlay onClick={onClose} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>

  )
})
