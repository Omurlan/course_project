import React, { useCallback, useEffect } from 'react'
import styles from './ArticlesPage.module.scss'
import ArticleList from 'entities/Article/ui/ArticleList/ArticleList'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticlesList } from '../model/services/fetchArticlesList'
import { useSelector } from 'react-redux'
import { getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { type ArticleView } from 'entities/Article'

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

  useEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlesPageActions.initState())
  }, [])

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [])

  return (
    <AsyncReducer reducers={reducers}>
      <div className={styles.articlesPage}>
        <ArticleViewSelector currentView={view} onViewClick={onChangeView} />
        <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
      />
      </div>
    </AsyncReducer>
  )
}

export default ArticlesPage
