import React, { memo, useCallback, useEffect } from 'react'
import cn from 'classnames'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Typography } from 'shared/ui/Typography/Typography'
import { CommentList } from 'entities/Comment'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { articleCommentsReducer, getArticleComments } from '../../model/slices/articleCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentToArticle } from 'pages/ArticlePage/model/services/addCommentToArticle/addCommentToArticle'

interface ArticlePageProps {

}

const reducers: ReducerList = {
  articleComments: articleCommentsReducer
}

const ArticlePage = memo(() => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  }, [])

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentToArticle(text))
  }, [])

  if (!id) {
    return (
      <Typography variant="heading">Статья не найдена</Typography>
    )
  }

  return (
    <AsyncReducer reducers={reducers} destroyOnUnmount>
      <ArticleDetails id={id} />
      <Typography variant="subheading">Комментарии</Typography>
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </AsyncReducer>
  )
})

export default memo(ArticlePage)
