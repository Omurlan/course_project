import React, { type ChangeEvent, type ChangeEventHandler, memo, useCallback } from 'react'
import styles from './LoginForm.module.scss'
import cn from 'classnames'
import Modal from 'react-modal'
import Button from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

interface LoginFormProps {

}

export const LoginForm: React.FC<LoginFormProps> = memo(() => {
  const dispatch = useDispatch()

  const { password, username } = useSelector(getLoginState)

  const onChangeUsername = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setUsername(e.target.value))
  }, [])

  const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(loginActions.setPassword(e.target.value))
  }, [])

  const onLoginClick = () => {
    //  @ts-expect-error error
    dispatch(loginByUsername({ username, password }))
  }

  return (
    <div className={styles.loginForm}>
      <Input value={username} onChange={onChangeUsername} placeholder="Логин" />
      <Input value={password} onChange={onChangePassword} placeholder="Пароль" />

      <Button onClick={onLoginClick}>Войти</Button>
    </div>
  )
})

export default LoginForm
