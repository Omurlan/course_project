import React, { memo, useCallback } from 'react'
import cn from 'classnames'
import Modal from 'react-modal'
import Button from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { loginActions } from '../../model/slice/loginSlice'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

interface LoginFormProps {

}

export const LoginForm: React.FC<LoginFormProps> = memo(() => {
  const dispatch = useDispatch()

  const { password, username } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername)
  }, [])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword)
  }, [])

  const onLoginClick = () => {
    //  @ts-expect-error error
    dispatch(loginByUsername({ username, password }))
  }

  return (
    <div className={styles.loginForm}>
      <input type="text" value={username} />
      <input type="text" value={password} />

      <Button onClick={onLoginClick}>
        Войти
      </Button>
    </div>
  )
})

export default LoginForm
