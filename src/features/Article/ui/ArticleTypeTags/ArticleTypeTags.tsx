import React, { memo } from 'react'
import cn from 'classnames'
import { type ArticleType } from 'entities/Article'
import { Tag } from 'shared/ui/Tag/Tag'
import { HStack } from 'shared/ui/Stack'

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
    <HStack gap={2} className={cn(className)}>
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
    </HStack>

  )
})
