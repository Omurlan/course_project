import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileData = (state: StateSchema) => state.profile?.data
export const getProfileError = (state: StateSchema) => state.profile?.error ?? null
export const getProfileForm = (state: StateSchema) => state.profile?.form
export const getProfileIsEdit = (state: StateSchema) => state.profile?.isEdit ?? false
export const getProfileLoading = (state: StateSchema) => state.profile?.isLoading ?? false
export const getProfileValidationForm = (state: StateSchema) => state.profile?.validationForm
