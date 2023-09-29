import React from 'react'
import styles from './ArticleListItem.module.scss'
import cn from 'classnames'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Card } from '@/shared/ui/Card/Card'
import { ArticleView } from '../../model/const/articleConst'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton: React.FC<ArticleListItemSkeletonProps> = ({ className, view }) => {
  if (view === ArticleView.PLATE) {
    return (
      <Card className={cn(styles.plate, className)}>
        <VStack>
          <div className={styles.imageWrapper}>
            <Skeleton width={200} height={200} className={styles.img} />
          </div>
          <Skeleton width={90} height={16} />
          <Skeleton width={150} height={16} />
        </VStack>
      </Card>
    )
  }

  return (
    <Card className={cn(styles.default, className)}>
      <VStack gap={3} className={styles.header}>
        <HStack align="center">
          <HStack align="center" max>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton width={100} height={16} />
          </HStack>
          <Skeleton width={100} height={16} />
        </HStack>

        <Skeleton width={250} height={24} />

        <Skeleton width={200} height={16} />

        <Skeleton width="100%" height={250} />

        <Skeleton width={250} height={20} />

        <Skeleton width="100%" height={16} />
        <Skeleton width="100%" height={16} />
      </VStack>
    </Card>
  )
}
