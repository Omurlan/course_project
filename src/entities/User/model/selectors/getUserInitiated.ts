import { type StateSchema } from '@/app/providers/StoreProvider'

export const getUserInitiated = (state: StateSchema) => state.user.initiated
