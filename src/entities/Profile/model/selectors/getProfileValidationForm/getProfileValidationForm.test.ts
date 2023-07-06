import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileValidationForm } from './getProfileValidationForm'
import { type ValidationForm } from 'shared/lib/validation/validateForm'
import { type Profile } from 'entities/Profile'

describe('getProfileValidationForm.test', () => {
  test('should return validation form object', () => {
    const validationForm: ValidationForm<keyof Profile> = {
      age: true,
      city: true,
      currency: true,
      lastname: true,
      first: true,
      avatar: true,
      username: true,
      country: true
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        validationForm
      }
    }

    expect(getProfileValidationForm(state as StateSchema)).toEqual(validationForm)
  })
  test('should return empty validation form object', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validationForm: {}
      }
    }

    expect(getProfileValidationForm(state as StateSchema)).toEqual({})
  })
  test('should return undefined', () => {
    const state = {}

    expect(getProfileValidationForm(state as StateSchema)).toBe(undefined)
  })
})
