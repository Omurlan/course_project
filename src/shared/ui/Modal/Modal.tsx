import React, { type ReactNode } from 'react'
import styles from './Modal.module.scss'
import cn from 'classnames'
import RModal from 'react-modal'

interface LoginModalProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Modal: React.FC<LoginModalProps> = ({ children, isOpen, onClose, className }) => {
  return (
    <RModal
      className={cn(styles.modal, className)}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      {children}
    </RModal>
  )
}

export default Modal
