import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageInited
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { type SortOrder } from 'shared/types'
import { type ArticleSortField } from 'entities/Article'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams | undefined, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI

    const inited = getArticlesPageInited(getState())

    if (!inited) {
      if (searchParams) {
        const orderFromUrl = searchParams.get('order') as SortOrder
        const sortFromUrl = searchParams.get('sort') as ArticleSortField
        const searchFromUrl = searchParams.get('search')

        if (orderFromUrl) {
          dispatch(articlesPageActions.setOrder(orderFromUrl))
        }
        if (sortFromUrl) {
          dispatch(articlesPageActions.setSort(sortFromUrl))
        }
        if (searchFromUrl) {
          dispatch(articlesPageActions.setSearch(searchFromUrl))
        }
      }

      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  }
)
