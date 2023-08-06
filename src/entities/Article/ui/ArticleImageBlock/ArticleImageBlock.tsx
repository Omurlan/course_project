import React from 'react'
import styles from './ArticleImageBlock.module.scss'
import cn from 'classnames'
import { type ArticleImageBlock as ArticleImage } from 'entities/Article/model/types/article'
import { Typography } from 'shared/ui/Typography/Typography'

interface ArticleImageBlockProps {
  className?: string
  block: ArticleImage
}

export const ArticleImageBlock = React.memo(({ className, block }: ArticleImageBlockProps) => {
  return (
    <div className={cn(styles.articleImageBlock, className)}>
      <img src={block.src} className={styles.image} alt={block.title} />
      {block.title && (
        <Typography variant="caption">{block.title}{block.title}</Typography>
      )}
    </div>
  )
})
