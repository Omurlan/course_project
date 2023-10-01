import React, { useCallback, useState } from 'react'
import { RatingCard } from '@/entities/RatingCard'
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

export interface ArticleRatingProps {
  className?: string
  articleId: string
}

const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
  const userData = useSelector(getUserAuthData)

  const { data, isLoading } = useGetArticleRating({ articleId, userId: userData?.id ?? '' })
  const [rated, setRated] = useState(false)

  const [rateArticle] = useRateArticle()

  const handleRate = useCallback((rate: number, feedback?: string) => {
    try {
      void rateArticle({
        rate,
        feedback,
        articleId,
        userId: userData?.id ?? ''
      })
      setRated(true)
    } catch (e) {
      console.log('error')
      console.log(e)
    }
  }, [userData])

  if (isLoading) {
    return <Skeleton width="100%" height={150} />
  }

  const rating = data?.[0]

  return (
    <div className={className}>
      <RatingCard
        initialRate={rating?.rate}
        hasFeedback
        disabled={rated}
        feedbackTitle="Оставьте отзыв о статьте"
        title={rated || rating ? 'Спасибо за оценку' : 'Оцените статью'}
        onRate={handleRate}
      />
    </div>
  )
}

export default ArticleRating
