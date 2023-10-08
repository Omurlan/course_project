import React from 'react'
import cn from 'classnames'
import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { VStack } from '@/shared/ui/Stack'
import { Skeleton } from '@/shared/ui/Skeleton'

interface NotificationListProps {
  className?: string
}

export const NotificationList: React.FC<NotificationListProps> = ({ className }) => {
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000
  })

  if (isLoading) {
    return (
      <VStack className={className}>
        <Skeleton width="100%" height={100} />
        <Skeleton width="100%" height={100} />
        <Skeleton width="100%" height={100} />
      </VStack>
    )
  }

  return (
    <VStack className={className}>
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  )
}
