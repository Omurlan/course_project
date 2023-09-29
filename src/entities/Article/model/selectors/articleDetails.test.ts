import { getArticleData, getArticleError, getArticleIsLoading } from '../selectors/articleDetails'
import { type StateSchema } from '@/app/providers/StoreProvider'

describe('articleDetails.test', () => {
  test('article reducer not defined', () => {
    expect(getArticleData({} as StateSchema)).toBe(undefined)
    expect(getArticleIsLoading({} as StateSchema)).toBe(false)
    expect(getArticleError({} as StateSchema)).toBe(null)
  })
  test('article is loading', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: true
      }
    }

    expect(getArticleIsLoading(state as StateSchema)).toBe(true)
    expect(getArticleError(state as StateSchema)).toBe(null)
    expect(getArticleData(state as StateSchema)).toBe(undefined)
  })
  test('article fetch error', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        isLoading: false,
        error: 'Error'
      }
    }

    expect(getArticleIsLoading(state as StateSchema)).toBe(false)
    expect(getArticleError(state as StateSchema)).toBe('Error')
    expect(getArticleData(state as StateSchema)).toBe(undefined)
  })
  test('article fetch successfully', () => {
    const state: DeepPartial<StateSchema> = {
      article: {
        data: {
          id: '10',
          title: 'Title'
        },
        isLoading: false,
        error: null
      }
    }

    expect(getArticleIsLoading(state as StateSchema)).toBe(false)
    expect(getArticleError(state as StateSchema)).toBe(null)
    expect(getArticleData(state as StateSchema)).toBe(state.article?.data)
  })
})
