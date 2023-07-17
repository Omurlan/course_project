import React, { useCallback, useEffect } from 'react'
import styles from './ArticleDetails.module.scss'
import cn from 'classnames'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import { getArticleData, getArticleError, getArticleIsLoading } from 'entities/Article/model/selectors/articleDetails'
import { AsyncReducer, type ReducerList } from 'shared/lib/components/AsyncReducer/AsyncReducer'
import { articleReducer } from 'entities/Article/model/slice/articleSlice'
import { Typography } from 'shared/ui/Typography/Typography'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { AiOutlineCalendar as CalendarIcon, AiOutlineEye as EyeIcon } from 'react-icons/ai'
import { type ArticleBlock } from 'entities/Article/model/types/article'
import { ArticleCodeBlock } from 'entities/Article/ui/ArticleCodeBlock/ArticleCodeBlock'
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock'
import { ArticleImageBlock } from 'entities/Article/ui/ArticleImageBlock/ArticleImageBlock'

interface ArticleProps {
  id: string
}

const reducers: ReducerList = {
  article: articleReducer
}

export const ArticleDetails = React.memo(({ id }: ArticleProps) => {
  const dispatch = useAppDispatch()

  const article = useSelector(getArticleData)
  const isLoading = useSelector(getArticleIsLoading)
  const error = useSelector(getArticleError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case 'CODE':
        return <ArticleCodeBlock className={styles.block} block={block} />

      case 'TEXT':
        return <ArticleTextBlock className={styles.block} block={block} />

      case 'IMAGE':
        return <ArticleImageBlock className={styles.block} block={block} />
      default:
        return null
    }
  }, [])

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [])

  let content

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} border={'50%'} />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width={'100%'} height={200} />
        <Skeleton className={styles.skeleton} width={'100%'} height={200} />
      </>
    )
  } else if (error) {
    content = (
      <Typography color="error" variant="heading">Произошла ошибка при загрузке</Typography>
    )
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar src={article?.img} className={styles.avatar} />
        </div>

        <Typography variant="heading">{article?.title}</Typography>
        <Typography variant="subheading">{article?.subtitle}</Typography>

        <div className={styles.articleInfo}>
          <EyeIcon />
          <Typography variant="caption">{article?.views}</Typography>
        </div>

        <div className={styles.articleInfo}>
          <CalendarIcon />
          <Typography variant="caption">{article?.createdAt}</Typography>
        </div>

        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <AsyncReducer reducers={reducers} destroyOnUnmount>
      <div className={styles.articleDetails}>
        {content}
      </div>
    </AsyncReducer>
  )
})
