import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageIsLoading, getArticlesPageLimit,
  getArticlesPageNum, getArticlesPageTotalCount
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticles',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI

    const isLoading = getArticlesPageIsLoading(getState())
    const page = getArticlesPageNum(getState())
    const limit = getArticlesPageLimit(getState())
    const totalCount = getArticlesPageTotalCount(getState())

    if (page * limit < totalCount && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1))
      dispatch(fetchArticlesList({}))
    }
  }
)
