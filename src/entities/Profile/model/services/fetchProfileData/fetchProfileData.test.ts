import { fetchProfileData } from './fetchProfileData'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsynkThunk'
import { Country, Currency } from 'shared/const/common'

const profileData = {
  first: 'Firstname',
  lastname: 'Lastname',
  currency: Currency.RUB,
  city: 'Moscow',
  age: 23,
  country: Country.USA,
  username: 'Omurlan'
}

describe('fetchProfileData.test', () => {
  test('success fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }))
    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(profileData)
  })

  test('error fetch profile data', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
