import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileIsEdit = (state: StateSchema) => state.profile?.isEdit ?? false
