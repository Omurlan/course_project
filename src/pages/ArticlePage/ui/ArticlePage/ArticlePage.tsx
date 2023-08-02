import React, { memo, useCallback, useEffect } from 'react'
import cn from 'classnames'
import { ArticleDetails } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography } from 'shared/ui/Typography/Typography'
import { CommentList } from 'entities/Comment'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { articleCommentsReducer, getArticleComments } from '../../model/slices/articleCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentToArticle } from 'pages/ArticlePage/model/services/addCommentToArticle/addCommentToArticle'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'

interface ArticlePageProps {

}

const reducers: ReducerList = {
  articleComments: articleCommentsReducer
}

const ArticlePage = memo(() => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [])

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
      <Page>
        <Button onClick={onBackToList} variant="outline">Назад к списку</Button>
        <ArticleDetails id={id} />
        <Typography variant="subheading">Комментарии</Typography>
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </AsyncReducer>
  )
})

export default memo(ArticlePage)
