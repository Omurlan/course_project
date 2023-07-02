export type { Profile, ProfileSchema } from './model/types/profile'
export { ProfileCard } from './ui/ProfileCard/ProfileCard'

export {
  profileActions,
  profileReducer
} from './model/slice/profileSlice'

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData'
