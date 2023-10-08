import React from 'react'
import styles from './ArticleTextBlock.module.scss'
import cn from 'classnames'
import { type ArticleTextBlock as ArticleText } from '../../model/types/article'
import { Typography } from '@/shared/ui/Typography'

interface ArticleTextBlockProps {
  className?: string
  block: ArticleText
}

export const ArticleTextBlock = React.memo(({ block, className }: ArticleTextBlockProps) => {
  return (
    <div className={cn(styles.articleTextBlock, className)}>
      {block.title && (
        <Typography className={styles.title} variant="subheading">{block.title}</Typography>
      )}
      {block.paragraphs.map((paragraph, index) => (
        <Typography className={styles.paragraph} key={index} variant="body">{paragraph}</Typography>
      ))}
    </div>
  )
})
