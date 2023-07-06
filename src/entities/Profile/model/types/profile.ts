import { type Country, type Currency } from 'shared/const/common'
import { type ValidationForm } from 'shared/lib/validation/validateForm'

export interface Profile {
  first?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error: string | null
  isEdit: boolean
  validationForm: ValidationForm<keyof Profile>
}
