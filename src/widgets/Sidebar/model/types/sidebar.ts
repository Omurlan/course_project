import { type IconType } from 'react-icons'

export interface SidebarItemType {
  title: string
  path: string
  Icon: IconType
  authOnly?: boolean
}
