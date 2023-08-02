import React, { useCallback, useEffect } from 'react'
import styles from './ArticlesPage.module.scss'
import ArticleList from 'entities/Article/ui/ArticleList/ArticleList'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { type ArticleView } from 'entities/Article'
import { Page } from 'widgets/Page/Page'
import { fetchNextArticles } from 'pages/ArticlesPage/model/services/fetchNextArticles/fetchNextArticles'
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage'

interface ArticlesPageProps {

}

const reducers: ReducerList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage: React.FC<ArticlesPageProps> = () => {
  const dispatch = useAppDispatch()

  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)

  const handleLoadMore = useCallback(() => {
    dispatch(fetchNextArticles())
  }, [])

  useEffect(() => {
    dispatch(initArticlesPage())
  }, [])

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [])

  return (
    <AsyncReducer reducers={reducers}>
      <Page
          onScrollEnd={handleLoadMore}
          className={styles.articlesPage}
      >
        <ArticleViewSelector currentView={view} onViewClick={onChangeView} />
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
