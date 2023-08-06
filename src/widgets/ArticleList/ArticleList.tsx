import React, { type HTMLAttributeAnchorTarget, useCallback } from 'react'
import styles from './ArticleList.module.scss'
import cn from 'classnames'
import { ArticleListItem, ArticleListItemSkeleton, type Article, ArticleView } from 'entities/Article'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.PLATE ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton className={styles.articleItem} key={index} view={view} />
    ))
}

export const ArticleList: React.FC<ArticleListProps> = (props) => {
  const { isLoading, className, view = ArticleView.DEFAULT, articles, target } = props

  const renderArticle = useCallback((article: Article) => {
    return (
      <ArticleListItem
        className={styles.articleItem}
        target={target}
        key={article.id}
        article={article}
        view={view}
      />
    )
  }, [view])

  return (
    <div className={cn(styles.articleList, className, {
      [styles.default]: view === ArticleView.DEFAULT,
      [styles.plate]: view === ArticleView.PLATE
    })}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}

      {isLoading && getSkeletons(view)}
    </div>
  )
}
