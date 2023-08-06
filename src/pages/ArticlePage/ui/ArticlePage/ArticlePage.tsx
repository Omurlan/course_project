import React, { memo, useCallback, useEffect } from 'react'
import styles from './ArticlePage.module.scss'
import { ArticleDetails, ArticleView } from 'entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography } from 'shared/ui/Typography/Typography'
import { CommentList } from 'entities/Comment'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { getArticleComments } from '../../model/slices/articlePageCommentsSlice'
import { useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentToArticle } from 'pages/ArticlePage/model/services/addCommentToArticle/addCommentToArticle'
import { Button } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Page } from 'widgets/Page/Page'
import { getArticleRecommendations } from '../../model/slices/articlePageRecommendationsSlice'
import { getArticleRecommendationsIsLoading } from 'pages/ArticlePage/model/selectors/recommendations'
import { ArticleList } from 'widgets/ArticleList/ArticleList'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articlePageReducer } from '../../model/slices'

const reducers: ReducerList = {
  articlePage: articlePageReducer
}

const ArticlePage = memo(() => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [])

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendations())
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
        <div className={styles.articlePage}>
          <Button
            onClick={onBackToList}
            variant="outline"
          >
            Назад к списку
          </Button>

          <ArticleDetails id={id} />

          <Typography variant='subheading'>Рекомендуемые</Typography>

          <ArticleList
            target="_blank"
            className={styles.recommendations}
            view={ArticleView.PLATE}
            articles={recommendations}
            isLoading={recommendationsIsLoading}
          />

          <Typography variant="subheading">Комментарии</Typography>
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList
            isLoading={commentsIsLoading}
            comments={comments}
          />
        </div>
      </Page>
    </AsyncReducer>
  )
})

export default memo(ArticlePage)
