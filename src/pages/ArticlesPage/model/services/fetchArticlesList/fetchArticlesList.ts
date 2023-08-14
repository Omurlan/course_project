import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Article, ArticleType } from 'entities/Article'
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI
    const limit = getArticlesPageLimit(getState())

    const sort = getArticlesPageSort(getState())
    const order = getArticlesPageOrder(getState())
    const search = getArticlesPageSearch(getState())
    const page = getArticlesPageNum(getState())
    const type = getArticlesPageType(getState())

    try {
      addQueryParams({ sort, order, search, type })
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          type: type === ArticleType.ALL ? undefined : type,
          q: search
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
