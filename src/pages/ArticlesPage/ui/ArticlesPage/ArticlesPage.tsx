import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './ArticlesPage.module.scss'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from 'widgets/Page/Page'
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice'
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import {
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { ArticleList } from 'widgets/ArticleList/ArticleList'
import { useSearchParams } from 'react-router-dom'
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters'

const reducers: ReducerList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = () => {
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)

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

        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>

    </AsyncReducer>
  )
}

export default ArticlesPage
