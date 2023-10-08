import React, { useCallback, useEffect } from 'react'
import styles from './ArticleDetails.module.scss'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/articleDetails'
import { AsyncReducer, type ReducerList } from '@/shared/lib/components/AsyncReducer/AsyncReducer'
import { articleReducer } from '../../model/slice/articleSlice'
import { Typography } from '@/shared/ui/Typography'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Avatar } from '@/shared/ui/Avatar'
import { AiOutlineCalendar as CalendarIcon, AiOutlineEye as EyeIcon } from 'react-icons/ai'
import { type ArticleBlock } from '../../model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'

interface ArticleProps {
  id?: string
}

const reducers: ReducerList = {
  article: articleReducer
}

export const ArticleDetails = React.memo(({ id }: ArticleProps) => {
  const dispatch = useAppDispatch()

  const article = useSelector(getArticleData)
  const isLoading = useSelector(getArticleIsLoading)
  const error = useSelector(getArticleError)

  const renderBlock = useCallback((block: ArticleBlock, index: number) => {
    switch (block.type) {
      case 'CODE':
        return <ArticleCodeBlock key={index} className={styles.block} block={block} />
      case 'TEXT':
        return <ArticleTextBlock key={index} className={styles.block} block={block} />
      case 'IMAGE':
        return <ArticleImageBlock key={index} className={styles.block} block={block} />
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
