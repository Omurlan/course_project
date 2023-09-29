import React, { Suspense, useCallback, useEffect } from 'react'
import { Typography } from '@/shared/ui/Typography/Typography'
import { AddCommentForm } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { addCommentToArticle } from '../../model/services/addCommentToArticle/addCommentToArticle'
import { useSelector } from 'react-redux'
import { getArticleComments } from '../../model/slices/articlePageCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleCommentsProps {
  id?: string
}

const ArticleComments: React.FC<ArticleCommentsProps> = ({ id }) => {
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const dispatch = useAppDispatch()

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentToArticle(text))
  }, [])

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  }, [])

  return (
    <div>
      <Typography variant="subheading">Комментарии</Typography>

      <Suspense fallback="Идет загрузка">
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>

      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </div>
  )
}

export default ArticleComments
