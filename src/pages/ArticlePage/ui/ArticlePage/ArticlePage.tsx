import React, { memo, useEffect } from 'react'
import cn from 'classnames'
import { ArticleDetails } from 'entities/Article'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { articleReducer } from 'entities/Article/model/slice/articleSlice'
import { useParams } from 'react-router-dom'
import { Typography } from 'shared/ui/Typography/Typography'

interface ArticlePageProps {

}

const ArticlePage = memo(() => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <Typography variant="heading">Статья не найдена</Typography>
    )
  }

  return (
    <ArticleDetails id={id} />
  )
})

export default memo(ArticlePage)
