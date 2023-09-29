import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUserAuthData } from '@/entities/User'
import { type ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticleData } from '@/entities/Article/model/selectors/articleDetails'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const addCommentToArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'article/addCommentToArticle',
  async (text, thunkAPI) => {
    const { extra: { api }, dispatch, rejectWithValue, getState } = thunkAPI

    const userData = getUserAuthData(getState())
    const article = getArticleData(getState())

    if (!userData || !text || !article) {
      return rejectWithValue('No data')
    }

    try {
      const response = await api.post('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      })

      if (!response.data) {
        throw new Error()
      }

      dispatch(fetchCommentsByArticleId(article.id))

      return response.data
    } catch (e) {
      return rejectWithValue('Error')
    }
  }
)
