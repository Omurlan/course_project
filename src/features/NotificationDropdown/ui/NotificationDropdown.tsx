import React, { memo } from 'react'
import styles from './NotificationDropdown.module.scss'
import { Popover } from 'shared/ui/Popups'
import { Button } from 'shared/ui/Button/Button'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { NotificationList } from 'entities/Notification'

interface NotificationDropdownProps {
  className?: string
}

export const NotificationDropdown = memo(({ className }: NotificationDropdownProps) => {
  return (
    <Popover
      className={className}
      direction="bottom left"
      trigger={
        <Button variant="ghost">
          <IoIosNotificationsOutline />
        </Button>
      }
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  )
})
