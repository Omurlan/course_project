import React, { type ChangeEvent, useCallback } from 'react'
import cn from 'classnames'
import { ArticleSortSelector, ArticleTypeTags, ArticleViewSelector } from 'features/Article'
import { type ArticleSortField, ArticleType, type ArticleView } from 'entities/Article'
import { type SortOrder } from 'shared/types'
import { type TagOption } from 'features/Article'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Input } from 'shared/ui/Input/Input'
import { articlesPageActions } from '../../model/slices/articlesPageSlice'
import { useSelector } from 'react-redux'
import {
  getArticlesPageOrder, getArticlesPageSearch,
  getArticlesPageSort, getArticlesPageType,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { HStack, VStack } from 'shared/ui/Stack'

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
    <VStack max gap={4} className={cn(className)}>
      <Input
        value={search}
        onChange={handleChangeSearch}
        placeholder="Поиск"
      />

      <HStack justify="between" align="end" max>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={handleChangeOrder}
          onChangeSort={handleChangeSort}
        />
        <ArticleViewSelector currentView={view} onViewClick={handleChangeView} />
      </HStack>

      <ArticleTypeTags
        types={articleTypes}
        onChangeType={handleChangeType}
        activeType={type}
      />
    </VStack>
  )
}
