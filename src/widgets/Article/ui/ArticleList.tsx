import styles from './ArticleList.module.scss'
import cn from 'classnames'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { type Article, ArticleListItem, ArticleListItemSkeleton, ArticleView } from '@/entities/Article'
import { Typography } from '@/shared/ui/Typography'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  target?: HTMLAttributeAnchorTarget
  view?: ArticleView
  virtualized?: boolean
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.PLATE ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton key={index} view={view} />
  ))

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.PLATE,
    isLoading
  } = props

  if (!isLoading && !articles.length) {
    return (
      <div className={cn(styles.ArticleList, className)}>
        <Typography variant="subheading">Статьи не найдены</Typography>
      </div>
    )
  }

  return (
    <div
      className={cn(styles.articleList, className, {
        [styles.default]: view === ArticleView.DEFAULT,
        [styles.plate]: view === ArticleView.PLATE
      })}
    >
      {articles.map((article) => (
        <ArticleListItem key={article.id} article={article} view={view} />
      ))}

      {isLoading && getSkeletons(view)}
    </div>
  )
})
