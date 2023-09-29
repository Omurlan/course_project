import { createAsyncThunk } from '@reduxjs/toolkit'
import { type User, userActions } from '@/entities/User'
import { type ThunkConfig } from '@/app/providers/StoreProvider'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra: { api }, dispatch, rejectWithValue } = thunkAPI

    try {
      const response = await api.post('/login', authData)

      if (!response.data) {
        throw new Error()
      }

      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      return rejectWithValue('Error')
    }
  }
)
