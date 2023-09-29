import React from 'react'
import styles from './NotificationItem.module.scss'
import { type Notification } from '../../model/types/notification'
import cn from 'classnames'
import { Card } from '@/shared/ui/Card/Card'
import { Typography } from '@/shared/ui/Typography/Typography'
import { AppLink } from '@/shared/ui/Link/AppLink'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ item }) => {
  const content = <Card className={styles.notificationItem}>
    <Typography variant="subheading">{item.title}</Typography>
    <Typography>{item.description}</Typography>
  </Card>

  if (item.href) {
    return (
      <AppLink className={styles.link} target="_blank" to={item.href}>
        {content}
      </AppLink>
    )
  }

  return content
}
