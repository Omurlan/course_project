import React, { type ChangeEvent, useCallback } from 'react'
import styles from './ArticlePageFilters.module.scss'
import cn from 'classnames'
import { ArticleTypeTags, ArticleViewSelector } from 'features/Article'
import { type ArticleSortField, ArticleSortSelector, ArticleType, type ArticleView } from 'entities/Article'
import { Input } from 'shared/ui/Input/Input'
import { type SortOrder } from 'shared/types'
import { type TagOption } from 'features/Article/ui/ArticleTypeTags/ArticleTypeTags'
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { articlesPageActions } from 'pages/ArticlesPage/model/slices/articlesPageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  getArticlesPageOrder, getArticlesPageSearch,
  getArticlesPageSort, getArticlesPageType,
  getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors'

interface ArticlesPageFiltersProps {
  className?: string
}

const articleTypes: TagOption[] = [
  {
    value: ArticleType.ALL,
    title: 'Все'
  },
  {
    value: ArticleType.IT,
    title: 'IT'
  },
  {
    value: ArticleType.ECONOMICS,
    title: 'Экономика'
  },
  {
    value: ArticleType.SCIENCE,
    title: 'Наука'
  }
]

export const ArticlesPageFilters: React.FC<ArticlesPageFiltersProps> = ({ className }) => {
  const dispatch = useAppDispatch()

  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const resetPage = () => {
    dispatch(articlesPageActions.setPage(1))
  }

  const handleChangeSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch(articlesPageActions.setSearch(event.target.value))
    resetPage()
    debouncedFetchData()
  }, [debouncedFetchData])

  const handleChangeSort = useCallback((sort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(sort))
    resetPage()
    fetchData()
  }, [fetchData])

  const handleChangeType = useCallback((type: ArticleType) => {
    dispatch(articlesPageActions.setType(type))
    resetPage()
    fetchData()
  }, [])

  const handleChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [])

  const handleChangeOrder = useCallback((order: SortOrder) => {
    dispatch(articlesPageActions.setOrder(order))
    resetPage()
    fetchData()
  }, [fetchData])

  return (
    <div className={cn(styles.articleFilters, className)}>
      <Input
        value={search}
        onChange={handleChangeSearch}
        placeholder="Поиск"
      />

      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={handleChangeOrder}
          onChangeSort={handleChangeSort}
        />
        <ArticleViewSelector currentView={view} onViewClick={handleChangeView} />
      </div>

      <ArticleTypeTags
        types={articleTypes}
        onChangeType={handleChangeType}
        activeType={type}
      />
    </div>
  )
}
