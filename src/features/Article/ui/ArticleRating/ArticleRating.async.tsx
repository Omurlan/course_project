import { lazy, Suspense } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton'
import { type ArticleRatingProps } from '../ArticleRating/ArticleRating'

const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'))

export const ArticleRating = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width="100%" height={150} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  )
}
