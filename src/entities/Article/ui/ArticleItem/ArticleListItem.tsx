import React, { type HTMLAttributeAnchorTarget } from 'react'
import styles from './ArticleListItem.module.scss'
import cn from 'classnames'
import { type Article, type ArticleTextBlock } from '../../model/types/article'
import { ArticleView } from '../../model/const/articleConst'
import { Typography } from '@/shared/ui/Typography/Typography'
import { AiOutlineEye as EyeIcon } from 'react-icons/ai'
import { Card } from '@/shared/ui/Card/Card'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Button } from '@/shared/ui/Button/Button'
import { ArticleTextBlock as ArticleTextBlockComponent } from '../ArticleTextBlock/ArticleTextBlock'
import { AppLink } from '@/shared/ui/Link/AppLink'
import { HStack, VStack } from '@/shared/ui/Stack'
import { RoutePath } from '@/shared/const/router'

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
    <HStack gap={2} align="center">
      <Typography className={styles.views} variant="caption">{article.views}</Typography>
      <EyeIcon />
    </HStack>
  )

  if (view === ArticleView.PLATE) {
    return (
      <AppLink target={target} to={RoutePath.article + article.id}>
        <Card className={cn(styles.plate, className)}>
          <div className={styles.imageWrapper}>
            <img src={article.img} className={styles.img} alt={article.title} />
            <Typography className={styles.date} variant="caption" >{article.createdAt}</Typography>
          </div>
          <HStack justify="between" align="center" className={styles.infoWrapper}>
            {types}
            {views}
          </HStack>
          <Typography className={styles.title} variant="subheading">{article.title}</Typography>
        </Card>
      </AppLink>
    )
  }

  const textBlock = article.blocks.find((block) => block.type === 'TEXT') as ArticleTextBlock

  return (
    <Card className={cn(styles.default, className)}>
      <VStack gap={3}>
        <HStack justify="between" max>
          <HStack align="center" gap={2}>
            <Avatar size={30} src={article.user.avatar} />
            <Typography variant="body">{article.user.username}</Typography>
          </HStack>
          <Typography variant="body">{article.createdAt}</Typography>
        </HStack>

        <Typography className={styles.title} variant="subheading">{article.title}</Typography>
        {types}

        <img className={styles.img} src={article.img} alt={article.title} />
        {textBlock && (
          <ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />
        )}
        <HStack align="end" justify="between" max>
          <AppLink target={target} to={RoutePath.article + article.id}>
            <Button variant="outline">Читать далее...</Button>
          </AppLink>
          {views}
        </HStack>
      </VStack>
    </Card>
  )
}
