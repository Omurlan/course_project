import React, { memo } from 'react'
import styles from './ArticleTypeTags.module.scss'
import cn from 'classnames'
import { type ArticleType } from 'entities/Article'
import { Tag } from 'shared/ui/Tag/Tag'

export interface TagOption {
  title: string
  value: ArticleType
}

interface ArticleTypeTagsProps {
  onChangeType: (type: ArticleType) => void
  types: TagOption[]
  activeType?: ArticleType
  className?: string
}

export const ArticleTypeTags = memo(({ types, activeType, onChangeType, className }: ArticleTypeTagsProps) => {
  const handleClickTag = (value: ArticleType) => {
    onChangeType(value)
  }

  return (
    <div className={cn(styles.tagList, className)}>
      {types.map(({ value, title }) => (
        <Tag
          active={activeType === value}
          onClick={handleClickTag}
          value={value}
          key={value}
        >
          {title}
        </Tag>
      ))}
    </div>

  )
})
