import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileLoading } from './getProfileLoading'

describe('getProfileLoading.test', () => {
  test('should return false', () => {
    const state = {}

    expect(getProfileLoading(state as StateSchema)).toBe(false)
  })
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    }

    expect(getProfileLoading(state as StateSchema)).toBe(true)
  })
})
