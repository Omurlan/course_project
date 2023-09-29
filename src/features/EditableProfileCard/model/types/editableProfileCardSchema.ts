import { type ValidationForm } from 'shared/lib/validation/validateForm'
import { type Profile } from 'entities/Profile'

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error: string | null
  isEdit: boolean
  validationForm: ValidationForm<keyof Profile>
}
