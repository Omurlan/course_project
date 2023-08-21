import React, { useCallback, useEffect } from 'react'
import styles from './ArticlesPage.module.scss'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from 'widgets/Page/Page'
import { articlesPageReducer } from '../../model/slices/articlesPageSlice'
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { useSearchParams } from 'react-router-dom'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList'

const reducers: ReducerList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  const handleLoadMore = useCallback(() => {
    dispatch(fetchNextArticles())
  }, [])

  useEffect(() => {
    dispatch(initArticlesPage(searchParams))
  }, [])

  return (
    <AsyncReducer reducers={reducers}>
      <Page onScrollEnd={handleLoadMore} className={styles.articlesPage}>
        <ArticlesPageFilters />
        <ArticleInfiniteList />
      </Page>
    </AsyncReducer>
  )
}

export default ArticlesPage
