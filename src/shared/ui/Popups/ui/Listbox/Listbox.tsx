import React, { Fragment } from 'react'
import styles from './Listbox.module.scss'
import { Listbox as HListbox } from '@headlessui/react'
import cn from 'classnames'
import { Input } from '../../../Input/Input'
import popupStyles from '../../styles/popup.module.scss'

export interface ListBoxItem<T extends string = string> {
  value: T
  title: string
  disabled?: boolean
}

interface ListboxProps<T extends string > {
  items?: Array<ListBoxItem<T>>
  className?: string
  value?: ListBoxItem<T>
  defaultValue?: string
  onChange?: (value: ListBoxItem<T>) => void
  placeholder?: string
  helperText?: string
  disabled?: boolean
  name?: string
  label?: string
  error?: boolean
  onClose?: () => void
}

export const Listbox = <T extends string>(props: ListboxProps<T>) => {
  const { className, items, value, onChange, defaultValue, label } = props

  return (
    <HListbox
      className={cn(styles.listbox, popupStyles.popup, className)}
      onChange={onChange}
      as="div"
      value={value}
    >
      <HListbox.Button as={Fragment}>
        <Input label={label} readOnly value={value ? value.title : defaultValue} />
      </HListbox.Button>
      <HListbox.Options className={styles.options}>
        {items?.map((item) => (
          <HListbox.Option
            disabled={item.disabled}
            key={item.value}
            value={item}
            as={Fragment}>
            {({ selected, disabled, active }) => (
              <li
                className={cn(styles.item, {
                  [styles.selected]: selected,
                  [popupStyles.disabled]: disabled,
                  [popupStyles.active]: active
                })}
              >
                {item.title}
              </li>
            )}
          </HListbox.Option>
        ))}
      </HListbox.Options>
    </HListbox>
  )
}
