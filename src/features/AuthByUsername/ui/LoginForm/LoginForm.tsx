import React, { type ChangeEvent, memo, useState } from 'react'
import styles from './LoginForm.module.scss'
import Button from 'shared/ui/Button/Button'
import Input from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginLoading } from '../../model/selectors/getLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError'
import { loginReducer } from '../../model/slice/loginSlice'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'

export interface LoginFormProps {

}

interface Form {
  password: string
  username: string
}

const asyncReducers: ReducerList = {
  login: loginReducer
}

export const LoginForm: React.FC<LoginFormProps> = memo(() => {
  const [form, setForm] = useState<Form>({
    password: '',
    username: ''
  })

  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onLoginClick = (): void => {
    //  @ts-expect-error error
    dispatch(loginByUsername({ username: form.username, password: form.password }))
  }

  return (
    <AsyncReducer reducers={asyncReducers}>
      <div className={styles.loginForm}>
        <Input name="username" value={form.username} onChange={handleChange} placeholder="Логин" />
        <Input name="password" value={form.password} onChange={handleChange} placeholder="Пароль" />

        <Button disabled={isLoading} onClick={onLoginClick}>Войти</Button>
      </div>
    </AsyncReducer>
  )
})

export default LoginForm
