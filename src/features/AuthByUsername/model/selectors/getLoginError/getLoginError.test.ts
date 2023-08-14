import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginError } from '../../selectors/getLoginError/getLoginError'

describe('getLoginError.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: false,
        error: 'Error'
      }
    }

    expect(getLoginError(state as StateSchema)).toEqual('Error')
  })

  test('empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginError(state as StateSchema)).toEqual(null)
  })
})
