import React from 'react'
import styles from './LoginModal.module.scss'
import cn from 'classnames'
import Modal from 'react-modal'
import LoginForm from '../LoginForm/LoginForm'

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
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
