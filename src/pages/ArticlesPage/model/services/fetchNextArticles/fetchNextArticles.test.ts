import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsynkThunk'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { fetchNextArticles } from './fetchNextArticles'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchNextArticles.test', () => {
  test('fetch next', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 1,
        limit: 9,
        totalCount: 18,
        isLoading: false
      }
    }

    const thunk = new TestAsyncThunk(fetchNextArticles, state)
    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalled()
  })
  test('all data has been received', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 2,
        limit: 9,
        totalCount: 18,
        isLoading: false
      }
    }

    const thunk = new TestAsyncThunk(fetchNextArticles, state)
    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
  test('do not fetch while isLoading true', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 1,
        limit: 9,
        totalCount: 18,
        isLoading: true
      }
    }

    const thunk = new TestAsyncThunk(fetchNextArticles, state)
    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
