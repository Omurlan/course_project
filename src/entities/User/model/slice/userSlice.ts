import { createSlice } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/user'

const initialState: UserSchema = {

}

const counterSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {

  }
})

export const { actions: userActions, reducer: userReducer } = counterSlice
