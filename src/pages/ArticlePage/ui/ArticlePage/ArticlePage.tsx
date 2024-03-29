import React, { memo } from 'react'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router-dom'
import { AsyncReducer, type ReducerList } from '@/shared/lib/components/AsyncReducer/AsyncReducer'
import { Page } from '@/widgets/Page'
import { articlePageReducer } from '../../model/slices'
import { ArticlePageHeader } from '../ArticlePageHeader/ArticlePageHeader'
import { VStack } from '@/shared/ui/Stack'
import { ArticleRecommendationsList } from '@/widgets/Article'
import { ArticleComments } from '../ArticleComments/ArticleComments'
import { ArticleRating } from '@/features/Article'

const reducers: ReducerList = {
  articlePage: articlePageReducer
}

const ArticlePage = memo(() => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return null
  }

  return (
    <AsyncReducer reducers={reducers} destroyOnUnmount>
      <Page>
        <VStack max gap={4}>
          <ArticlePageHeader />
          <ArticleDetails id={id} />
          <ArticleRating articleId={id} />
          <ArticleRecommendationsList />
          <ArticleComments id={id} />
        </VStack>
      </Page>
    </AsyncReducer>
  )
})

export default memo(ArticlePage)
