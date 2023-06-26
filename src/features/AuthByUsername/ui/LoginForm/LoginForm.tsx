import React, { type ChangeEvent, memo, useState } from 'react'
import styles from './LoginForm.module.scss'
import Button from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

interface LoginFormProps {

}

interface Form {
  password: string
  username: string
}

export const LoginForm: React.FC<LoginFormProps> = memo(() => {
  const [form, setForm] = useState<Form>({
    password: '',
    username: ''
  })

  const { isLoading } = useSelector(getLoginState)

  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onLoginClick = (): void => {
    //  @ts-expect-error error
    dispatch(loginByUsername({ username: form.username, password: form.password }))
  }

  return (
    <div className={styles.loginForm}>
      <Input name="username" value={form.username} onChange={handleChange} placeholder="Логин" />
      <Input name="password" value={form.password} onChange={handleChange} placeholder="Пароль" />

      <Button disabled={isLoading} onClick={onLoginClick}>Войти</Button>
    </div>
  )
})

export default LoginForm
