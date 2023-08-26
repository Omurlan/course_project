import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from 'entities/Profile'
import { getProfileForm } from '../../selectors/editableProfileCardSelectors'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const formData = getProfileForm(getState())

    if (!formData?.id) {
      return rejectWithValue('No profile id')
    }

    try {
      const response = await extra.api.put<Profile>(`/profiles/${formData?.id}`, formData)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch {
      return rejectWithValue('Произошла ошибка')
    }
  })
