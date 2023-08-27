import React, { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { Page } from 'widgets/Page/Page'
import { articlePageReducer } from '../../model/slices'
import { ArticlePageHeader } from '../ArticlePageHeader/ArticlePageHeader'
import { VStack } from 'shared/ui/Stack'
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList'
import ArticleComments from '../ArticleComments/ArticleComments'

const reducers: ReducerList = {
  articlePage: articlePageReducer
}

const ArticlePage = memo(() => {
  const { id } = useParams<{ id: string }>()

  return (
    <AsyncReducer reducers={reducers} destroyOnUnmount>
      <Page>
        <VStack max gap={4}>
          <ArticlePageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleComments id={id} />
        </VStack>
      </Page>
    </AsyncReducer>
  )
})

export default memo(ArticlePage)
