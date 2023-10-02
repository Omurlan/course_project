import { rtkApi } from '@/shared/api/rtkApi'
import { type Article } from '@/entities/Article'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  }),
  overrideExisting: false
})

export const useArticleRecommendations = recommendationsApi.useGetArticleRecommendationsQuery
