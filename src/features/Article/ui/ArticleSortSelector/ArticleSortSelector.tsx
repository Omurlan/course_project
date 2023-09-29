import React, { useCallback, memo } from 'react'
import cn from 'classnames'
import styles from './ArticleSortSelector.module.scss'
import { type ChangeEventSelect, Select, type SelectOption } from '@/shared/ui/Select/Select'
import { ArticleSortField } from '@/entities/Article'
import { type SortOrder } from '@/shared/types'
import { HStack } from '@/shared/ui/Stack'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

const sortTitlesByEnum: Record<ArticleSortField, string> = {
  [ArticleSortField.CREATED]: 'Дата создания',
  [ArticleSortField.VIEWS]: 'Количество просмотров',
  [ArticleSortField.TITLE]: 'По названию'
}

const orderTitlesByType: Record<SortOrder, string> = {
  desc: 'По убыванию',
  asc: 'По возрастанию'
}

const orderOptions: Array<SelectOption<SortOrder>> = [
  {
    value: 'asc',
    title: orderTitlesByType.asc
  },
  {
    value: 'desc',
    title: orderTitlesByType.desc
  }
]

const sortFieldOptions: Array<SelectOption<ArticleSortField>> = [
  {
    value: ArticleSortField.CREATED,
    title: sortTitlesByEnum[ArticleSortField.CREATED]
  },
  {
    value: ArticleSortField.VIEWS,
    title: sortTitlesByEnum[ArticleSortField.VIEWS]
  },
  {
    value: ArticleSortField.TITLE,
    title: sortTitlesByEnum[ArticleSortField.TITLE]
  }
]

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { onChangeSort, sort, onChangeOrder, order, className } = props

  const handleSortChange = useCallback((event: ChangeEventSelect<ArticleSortField>) => {
    onChangeSort(event.value)
  }, [onChangeSort])

  const handleOrderChange = useCallback((event: ChangeEventSelect<SortOrder>) => {
    onChangeOrder(event.value)
  }, [onChangeOrder])

  return (
    <HStack gap={3} className={cn(className)}>
      <Select
        className={styles.select}
        label="Сортировать"
        selected={sortTitlesByEnum[sort]}
        options={sortFieldOptions}
        onChange={handleSortChange}
      />
      <Select
        className={styles.select}
        label="по"
        selected={orderTitlesByType[order]}
        options={orderOptions}
        onChange={handleOrderChange}
      />
    </HStack>
  )
})
