import React, { Suspense } from 'react'
import styles from './LoginModal.module.scss'
import cn from 'classnames'
import Modal from 'react-modal'
import { LoginFormAsync } from 'features/AuthByUsername/ui/LoginForm/LoginForm.async'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}>
      <Suspense fallback="">
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}

export default LoginModal
