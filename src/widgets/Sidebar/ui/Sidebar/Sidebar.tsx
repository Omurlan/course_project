import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import cn from 'classnames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
        data-testid="sidebar"
      className={cn(styles.sidebar, {
        [styles.collapsed]: collapsed
      })}
    >
      <button onClick={onToggle}>toggle</button>

      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default Sidebar
