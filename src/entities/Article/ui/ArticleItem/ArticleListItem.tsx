import React, { type HTMLAttributeAnchorTarget } from 'react'
import styles from './ArticleListItem.module.scss'
import cn from 'classnames'
import { type Article, ArticleView, type ArticleTextBlock } from '../../model/types/article'
import { Typography } from 'shared/ui/Typography/Typography'
import { AiOutlineEye as EyeIcon } from 'react-icons/ai'
import { Card } from 'shared/ui/Card/Card'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Button } from 'shared/ui/Button/Button'
import { ArticleTextBlock as ArticleTextBlockComponent } from '../ArticleTextBlock/ArticleTextBlock'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { AppLink } from 'shared/ui/Link/AppLink'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: React.FC<ArticleListItemProps> = (props) => {
  const { article, view, className, target } = props

  const types = <Typography className={styles.types} variant="caption">{article.type.join(', ')}</Typography>
  const views = (
    <>
      <Typography className={styles.views} variant="caption">{article.views}</Typography>
      <EyeIcon />
    </>
  )

  if (view === ArticleView.PLATE) {
    return (
      <AppLink target={target} to={RoutePath.article + article.id}>
        <div className={cn(styles.articleListItem, styles.plate, className)}>
          <Card className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={article.img} className={styles.img} alt={article.title} />
              <Typography className={styles.date} variant="caption" >{article.createdAt}</Typography>
            </div>
            <div className={styles.infoWrapper}>
              {types}
              {views}
            </div>
            <Typography className={styles.title} variant="subheading">{article.title}</Typography>
          </Card>
        </div>
      </AppLink>
    )
  }

  const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock

  return (
    <div className={cn(styles.articleListItem, styles.default, className)}>
      <Card className={styles.card}>
        <div className={styles.header}>
          <Avatar className={styles.avatar} size={30} src={article.user.avatar} />
          <Typography className={styles.username} variant="body">{article.user.username}</Typography>
          <Typography className={styles.date} variant="body">{article.createdAt}</Typography>
        </div>
        <Typography className={styles.title} variant="subheading">{article.title}</Typography>
        {types}
        <img className={styles.img} src={article.img} alt={article.title} />
        {textBlock && (
          <ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />
        ) }
        <div className={styles.footer}>
          <AppLink target={target} to={RoutePath.article + article.id}>
            <Button variant="outline">Читать далее...</Button>
          </AppLink>
          {views}
        </div>
      </Card>
    </div>
  )
}
