import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { getLoginLoading } from 'features/AuthByUsername/model/selectors/getLoginLoading/getLoginLoading'

describe('getLoginLoading.test', () => {
  test('loading false', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: false,
        error: ''
      }
    }

    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })

  test('loading true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
        error: ''
      }
    }

    expect(getLoginLoading(state as StateSchema)).toEqual(true)
  })

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {

    }

    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })
})
