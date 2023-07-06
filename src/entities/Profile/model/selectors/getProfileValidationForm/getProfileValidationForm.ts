import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileValidationForm = (state: StateSchema) => state.profile?.validationForm
