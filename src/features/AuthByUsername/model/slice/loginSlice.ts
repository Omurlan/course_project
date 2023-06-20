import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
  isLoading: false,
  password: '',
  username: '',
  error: null
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state, action) => {
      state.error = null
      state.isLoading = true
    })
    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
