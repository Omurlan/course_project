import { type UserRole } from '../const/userConst'

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
}

export interface UserSchema {
  authData?: User
  initiated: boolean
}
