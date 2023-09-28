import styles from './popup.module.scss'

export type DropdownDirection = 'top right' | 'top left' | 'bottom right' | 'bottom left'

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': styles.bottomLeft,
  'bottom right': styles.bottomRight,
  'top left': styles.topLeft,
  'top right': styles.topRight

}
