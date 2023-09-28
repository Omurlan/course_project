import { Popover as HPopover } from '@headlessui/react'
import { type DropdownDirection, mapDirectionClass } from '../../styles/consts'
import React, { type ReactNode } from 'react'
import popupStyles from '../../styles/popup.module.scss'
import styles from './Popover.module.scss'
import cn from 'classnames'

interface PopoverProps {
  className?: string
  direction?: DropdownDirection
  trigger: ReactNode
  children: ReactNode
}

export const Popover = (props: PopoverProps) => {
  const { trigger, children, direction = 'bottom right', className } = props

  return (
    <HPopover className={cn(popupStyles.popup, className)}>
      <HPopover.Button className={popupStyles.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={cn(styles.panel, mapDirectionClass[direction])}>
        {children}
      </HPopover.Panel>
    </HPopover>

  )
}
