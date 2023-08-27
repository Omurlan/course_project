import styles from './ArticleList.module.scss'
import cn from 'classnames'
import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { type Article, ArticleListItem, ArticleListItemSkeleton, ArticleView } from 'entities/Article'
import { List, type ListRowProps, WindowScroller } from 'react-virtualized'
import { PAGE_ID } from 'widgets/Page/Page'
import { Typography } from 'shared/ui/Typography/Typography'

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
    <ArticleListItemSkeleton className={styles.card} key={index} view={view} />
  ))

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.PLATE,
    isLoading,
    virtualized = true,
    target
  } = props

  const isBig = view === ArticleView.DEFAULT

  const itemsPerRow = isBig ? 1 : 3
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow)

  const rowRender = ({
    index, key, style
  }: ListRowProps) => {
    const items = []
    const fromIndex = index * itemsPerRow
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          target={target}
          key={`str${i}`}
        />
      )
    }

    return (
      <div
        key={key}
        style={style}
      >
        {items}
      </div>
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={cn(styles.ArticleList, className)}>
        <Typography variant="subheading">Статьи не найдены</Typography>
      </div>
    )
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop
      }) => (
        <div
          // @ts-expect-error ignore
          ref={registerChild}
          className={cn(styles.articleList, className, {
            [styles.default]: view === ArticleView.DEFAULT,
            [styles.plate]: view === ArticleView.PLATE
          })}
        >
          {virtualized
            ? (
              <List
                height={height ?? 700}
                rowCount={rowCount}
                rowHeight={isBig ? 700 : 330}
                rowRenderer={rowRender}
                width={width ? width - 80 : 700}
                autoHeight
                onScroll={onChildScroll}
                isScrolling={isScrolling}
                scrollTop={scrollTop}
              />
            )
            : (
              articles.map((article) => (
                <ArticleListItem key={article.id} article={article} view={view} />
              ))
            )}

          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  )
})
