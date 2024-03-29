import React from 'react'
import cn from 'classnames'
import { Page } from '@/widgets/Page'
import { useParams } from 'react-router-dom'
import { Typography } from '@/shared/ui/Typography'

interface ArticleFormPageProps {

}

const ArticleFormPage: React.FC<ArticleFormPageProps> = () => {
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <Page>
      <Typography variant="heading">{isEdit ? 'Редактирование' : 'Создание'}</Typography>
    </Page>
  )
}

export default ArticleFormPage
