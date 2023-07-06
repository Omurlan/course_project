import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileError } from './getProfileError'

describe('getProfileError.test', () => {
  test('should return error string', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Error'
      }
    }

    expect(getProfileError(state as StateSchema)).toEqual('Error')
  })
  test('should return null', () => {
    const state = {}

    expect(getProfileError(state as StateSchema)).toEqual(null)
  })
})
