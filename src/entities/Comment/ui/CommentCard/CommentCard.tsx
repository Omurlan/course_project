import React from 'react'
import styles from './CommentCard.module.scss'
import { type Comment } from '../../model/types/comment'
import cn from 'classnames'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Typography } from 'shared/ui/Typography/Typography'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard = React.memo(({ comment, isLoading, className }: CommentCardProps) => {
  if (isLoading) {
    return (
      <div className={styles.comment}
      >
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={styles.username} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
    )
  }

  return (
    <div className={cn(styles.comment, className)}>
      <div className={styles.header}>
        {comment.user.avatar && <Avatar width={45} height={45} src={comment.user.avatar} />}
        <Typography variant="body">{comment.user.username}</Typography>
      </div>
      <Typography variant="body">{comment.text}</Typography>
    </div>
  )
})
