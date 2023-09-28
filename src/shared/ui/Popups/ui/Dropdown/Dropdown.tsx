import { Menu } from '@headlessui/react'
import styles from './Dropdown.module.scss'
import cn from 'classnames'
import { Fragment, type ReactNode } from 'react'
import { AppLink } from '../../../Link/AppLink'
import { type DropdownDirection, mapDirectionClass } from '../../styles/consts'
import popupStyles from '../../styles/popup.module.scss'

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  direction?: DropdownDirection
  trigger: ReactNode
}

export const Dropdown = (props: DropdownProps) => {
  const { className, trigger, direction = 'bottom right', items } = props

  return (
    <Menu as="div" className={cn(styles.dropdown, popupStyles.popup, className)}>
      <Menu.Button className={popupStyles.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={cn(styles.menu, mapDirectionClass[direction])}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button type="button" onClick={item.onClick} className={cn(styles.item, 'text', {
              [popupStyles.active]: active
            })}>
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item key={index} as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}

      </Menu.Items>
    </Menu>
  )
}
