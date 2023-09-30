import React, { Suspense } from 'react'
import cn from 'classnames'
import Modal from '@/shared/ui/Modal/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Suspense fallback="">
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}

export default LoginModal
