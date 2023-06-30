import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User, userActions } from 'entities/User'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('/api/login', authData)

      if (!response.data) {
        throw new Error()
      }

      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Error here')
    }
  }
)
