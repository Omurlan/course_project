import { type StateSchema } from 'app/providers/StoreProvider'
import { Country, Currency } from 'shared/const/common'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm.test', () => {
  test('should return profile form', () => {
    const profileForm = {
      first: 'Firstname',
      lastname: 'Lastname',
      currency: Currency.RUB,
      city: 'Moscow',
      age: 23,
      country: Country.USA,
      username: 'Omurlan'
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: profileForm
      }
    }

    expect(getProfileForm(state as StateSchema)).toEqual(profileForm)
  })
  test('should return undefined', () => {
    const state = {}

    expect(getProfileForm(state as StateSchema)).toBe(undefined)
  })
})
