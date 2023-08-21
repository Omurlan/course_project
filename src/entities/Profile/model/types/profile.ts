import { type Country, type Currency } from 'shared/const/common'

export interface Profile {
  id?: string
  first?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}
