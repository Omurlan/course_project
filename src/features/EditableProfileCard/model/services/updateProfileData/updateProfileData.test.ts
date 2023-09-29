import { updateProfileData } from './updateProfileData'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsynkThunk'
import { Country, Currency } from '@/shared/const/common'

const profileData = {
  first: 'Firstname',
  lastname: 'Lastname',
  currency: Currency.RUB,
  city: 'Moscow',
  age: 23,
  country: Country.USA,
  username: 'Omurlan',
  id: '1'
}

describe('features/updateProfileData.test', () => {
  test('success update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }))
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileData)
  })

  test('error update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: profileData
      }
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('Произошла ошибка')
  })
})
