import React, { memo } from 'react'
import { Typography } from 'shared/ui/Typography/Typography'
import { ArticleList } from 'widgets/ArticleList/ArticleList'
import { ArticleView } from 'entities/Article'
import { VStack } from 'shared/ui/Stack'
import { useArticleRecommendations } from '../../api/articleRecommendationsApi'

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props

  const { data: articles = [], isLoading, error } = useArticleRecommendations(3)

  if (isLoading || error) {
    return null
  }

  return (
    <VStack gap={2} className={className}>
      <Typography variant='subheading'>Рекомендуемые</Typography>

      <ArticleList
        virtualized={false}
        articles={articles}
        target="_blank"
        view={ArticleView.PLATE}
      />
    </VStack>
  )
})
