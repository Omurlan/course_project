import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '.././services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { type ValidationForm } from 'shared/lib/validation/validateForm'

const initialState: ProfileSchema = {
  data: undefined,
  form: undefined,
  isEdit: false,
  error: null,
  isLoading: false,
  validationForm: {}
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    startEdit: (state) => {
      state.isEdit = true
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload
      }
    },
    cancelEdit: (state) => {
      state.form = state.data
      state.isEdit = false
      state.validationForm = {}
    },
    setValidationErrors: (state, action: PayloadAction<ValidationForm>) => {
      state.validationForm = action.payload
    }
  },
  extraReducers: (builder) => {
    // fetch profile
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.data = action.payload
      state.form = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as string
    })
    // update profile
    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true
      state.validationForm = {}
    })
    builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.data = action.payload
      state.form = action.payload
      state.isEdit = false
      state.isLoading = false
    })
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false
    })
  }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
