import React from 'react'
import styles from './ArticleViewSelector.module.scss'
import { ArticleView } from 'entities/Article'
import { type IconType } from 'react-icons'
import { CiGrid2H, CiGrid41 } from 'react-icons/ci'
import cn from 'classnames'
import { Button } from 'shared/ui/Button/Button'

interface ArticleViewSelectorProps {
  className?: string
  currentView: ArticleView
  onViewClick: (view: ArticleView) => void
}

const viewTypes: Array<{ view: ArticleView, Icon: IconType }> = [
  {
    view: ArticleView.DEFAULT,
    Icon: CiGrid2H
  },
  {
    view: ArticleView.PLATE,
    Icon: CiGrid41
  }
]

export const ArticleViewSelector: React.FC<ArticleViewSelectorProps> = (props) => {
  const { onViewClick, currentView, className } = props

  const onClick = (newView: ArticleView) => () => {
    onViewClick(newView)
  }

  return (
    <div className={cn(styles.articleViewSelector, className)}>
      {viewTypes.map(({ view, Icon }) => (
        <Button
          variant={view === currentView ? 'default' : 'outline'}
          className={cn(styles.button)}
          onClick={onClick(view)} key={view}
        >
          <Icon />
        </Button>
      ))}
    </div>
  )
}
