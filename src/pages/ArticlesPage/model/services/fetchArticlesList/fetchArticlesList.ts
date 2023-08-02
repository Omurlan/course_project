import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice'

interface FetchArticlesListProps {
  page: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI
    const { page = 1 } = args
    const limit = getArticlesPageLimit(getState())

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page
        }
      })

      if (!response.data) {
        throw new Error()
      }

      dispatch(articlesPageActions.setTotalCount(Number(response.headers['x-total-count'])))

      return response.data
    } catch {
      return rejectWithValue('Error')
    }
  }
)
