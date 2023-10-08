import React from 'react'
import styles from './ArticleCodeBlock.module.scss'
import cn from 'classnames'
import { type ArticleCodeBlock as ArticleCode } from '../../model/types/article'
import { Code } from '@/shared/ui/Code'

interface ArticleCodeBlockProps {
  className?: string
  block: ArticleCode
}

export const ArticleCodeBlock = React.memo(({ className, block }: ArticleCodeBlockProps) => {
  return (
    <div className={cn(styles.articleCodeBlock, className)}>
      <Code code={block.code} />
    </div>
  )
})
