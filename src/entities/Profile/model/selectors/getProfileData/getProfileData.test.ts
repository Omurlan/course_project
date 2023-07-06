import { type StateSchema } from 'app/providers/StoreProvider'
import { Country, Currency } from 'shared/const/common'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('should return profile data', () => {
    const profileData = {
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
        data: profileData
      }
    }

    expect(getProfileData(state as StateSchema)).toEqual(profileData)
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
