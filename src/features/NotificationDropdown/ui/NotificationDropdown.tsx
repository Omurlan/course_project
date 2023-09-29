import React, { memo, useCallback, useState } from 'react'
import styles from './NotificationDropdown.module.scss'
import { Popover } from '@/shared/ui/Popups'
import { Button } from '@/shared/ui/Button/Button'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { NotificationList } from '@/entities/Notification'
import { BrowserView, MobileView } from 'react-device-detect'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider'

interface NotificationDropdownProps {
  className?: string
}

export const NotificationDropdown = memo(({ className }: NotificationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const trigger = (
    <Button variant="ghost" onClick={handleOpenDrawer}>
      <IoIosNotificationsOutline />
    </Button>
  )

  return (
    <>
      <BrowserView>
        <Popover
          className={className}
          direction="bottom left"
          trigger={trigger}
        >
          <NotificationList className={styles.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={handleCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>

      </MobileView>
    </>
  )
})
