import { type StateSchema } from 'app/providers/StoreProvider'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsynkThunk'
import { initArticlesPage } from '../initArticlesPage/initArticlesPage'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage.test', () => {
  test("don't fetch if inited", async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        _inited: true
      }
    }

    const thunk = new TestAsyncThunk(initArticlesPage, state)
    await thunk.callThunk(undefined)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
  test('fetch if not inited', async () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        _inited: false
      }
    }

    const thunk = new TestAsyncThunk(initArticlesPage, state)
    await thunk.callThunk(undefined)

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalled()
  })
})
