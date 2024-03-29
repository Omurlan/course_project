import React, { useCallback } from 'react'
import { Button } from '@/shared/ui/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCanEditArticle } from '../../model/selectors/article'
import { getArticleData } from '@/entities/Article'
import { HStack } from '@/shared/ui/Stack'
import { RoutePath } from '@/shared/const/router'

interface ArticlePageHeaderProps {

}

export const ArticlePageHeader: React.FC<ArticlePageHeaderProps> = () => {
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleData)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [])

  const onEditArticle = () => {
    if (article) {
      navigate(`${RoutePath.article}${article.id}/edit`)
    }
  }

  return (
    <HStack justify="between" align="center" max>
      <Button
        onClick={onBackToList}
        variant="outline"
      >
        Назад к списку
      </Button>

      {canEdit && (
        <Button onClick={onEditArticle}>
          Редактировать
        </Button>
      )}
    </HStack>
  )
}
