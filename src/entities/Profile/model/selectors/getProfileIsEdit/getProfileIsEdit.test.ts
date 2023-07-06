import { type StateSchema } from 'app/providers/StoreProvider'
import { getProfileIsEdit } from './getProfileIsEdit'

describe('getProfileIsError.test', () => {
  test('should return false', () => {
    const state = {}

    expect(getProfileIsEdit(state as StateSchema)).toBe(false)
  })
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isEdit: true
      }
    }

    expect(getProfileIsEdit(state as StateSchema)).toBe(true)
  })
})
