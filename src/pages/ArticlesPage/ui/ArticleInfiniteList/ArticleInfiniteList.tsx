import React from 'react'
import cn from 'classnames'
import { useSelector } from 'react-redux'
import { getArticles } from '../../model/slices/articlesPageSlice'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { ArticleList } from '@/widgets/Article'
import { Typography } from '@/shared/ui/Typography'

export const ArticleInfiniteList = () => {
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)

  if (error) {
    return <Typography variant='heading'>Произошла ошибка</Typography>
  }

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
    />
  )
}
