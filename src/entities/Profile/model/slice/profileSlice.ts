import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile, type ProfileSchema } from '../types/profile'
import { fetchProfileData } from '.././services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
  data: undefined,
  readonly: true,
  error: null,
  isLoading: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.data = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
  }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
