import React, { useCallback } from 'react'
import styles from './ArticleList.module.scss'
import cn from 'classnames'
import { type Article, ArticleView } from 'entities/Article'
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.PLATE ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton className={styles.articleItem} key={index} view={view} />
    ))
}

const ArticleList: React.FC<ArticleListProps> = (props) => {
  const { isLoading, className, view = ArticleView.DEFAULT, articles } = props

  const renderArticle = useCallback((article: Article) => {
    return (
      <ArticleListItem className={styles.articleItem} key={article.id} article={article} view={view} />
    )
  }, [view])

  if (isLoading) {
    return (
      <div className={cn(styles.articleList, className, {
        [styles.default]: view === ArticleView.DEFAULT,
        [styles.plate]: view === ArticleView.PLATE
      })}>
        {getSkeletons(view)}
      </div>
    )
  }

  return (
    <div className={cn(styles.articleList, className, {
      [styles.default]: view === ArticleView.DEFAULT,
      [styles.plate]: view === ArticleView.PLATE
    })}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  )
}

export default ArticleList
