import React from 'react'
import styles from './ArticleListItem.module.scss'
import cn from 'classnames'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { ArticleView } from '../../model/types/article'
import { Card } from 'shared/ui/Card/Card'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton: React.FC<ArticleListItemSkeletonProps> = ({ className, view }) => {
  if (view === ArticleView.PLATE) {
    return (
      <div className={cn(styles.plate, className)}>
        <Card className={styles.card}>
          <div className={styles.imageWrapper}>
            <Skeleton width={200} height={200} className={styles.img} />
          </div>
          <div className={styles.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} />
        </Card>
      </div>
    )
  }

  return (
    <div className={cn(styles.default, className)}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <Skeleton border="50%" width={30} height={30} className={styles.avatar} />
          <Skeleton width={150} height={16} className={styles.username} />
          <Skeleton width={150} height={16} className={styles.date} />
        </div>
        <Skeleton width={250} height={24} className={styles.title} />
        <Skeleton height={200} className={styles.img} />
        <div className={styles.footer}>
          <Skeleton width={200} height={36} />
        </div>
      </Card>
    </div>
  )
}
