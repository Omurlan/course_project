import React from 'react'
import styles from './CommentList.module.scss'
import cn from 'classnames'
import { type Comment } from '../../model/types/comment'
import { Typography } from 'shared/ui/Typography/Typography'
import { CommentCard } from '../CommentCard/CommentCard'

interface CommentProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = React.memo(({ comments, className, isLoading }: CommentProps) => {
  if (isLoading) {
    return <Typography variant="subheading">Загрузка</Typography>
  }

  return (
    <div className={cn(styles.comments, className)}>
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))
        : <Typography variant="subheading">Нет комментариев</Typography>
      }
    </div>
  )
})
