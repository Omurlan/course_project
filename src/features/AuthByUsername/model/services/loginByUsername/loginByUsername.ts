import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { type User } from 'entities/User'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async ({ password, username }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        password,
        username
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.log(e)

      thunkAPI.rejectWithValue('error')
    }
  }
)
