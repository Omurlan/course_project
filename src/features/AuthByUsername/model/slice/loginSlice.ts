import { createSlice } from '@reduxjs/toolkit'
import { type LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
  isLoading: false,
  error: null
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state, action) => {
      state.error = null
      state.isLoading = true
    })
    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export const { reducer: loginReducer, actions: loginActions } = loginSlice
