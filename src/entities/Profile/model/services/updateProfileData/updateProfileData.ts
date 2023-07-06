import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'
import { getProfileForm } from 'entities/Profile'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const formData = getProfileForm(getState())

    try {
      const response = await extra.api.put<Profile>('/profile', formData)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch {
      return rejectWithValue('Произошла ошибка')
    }
  })
