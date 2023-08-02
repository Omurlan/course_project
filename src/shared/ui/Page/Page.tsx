import React, { type ComponentProps, type MutableRefObject, useRef } from 'react'
import styles from './Page.module.scss'
import cn from 'classnames'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps extends ComponentProps<'div'> {
  onScrollEnd?: () => void
}

export const Page: React.FC<PageProps> = ({ children, onScrollEnd, className, ...rest }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd })

  return (
    <div ref={wrapperRef} className={cn(styles.page, className)} {...rest}>
      {children}
      <div ref={triggerRef}></div>
    </div>
  )
}
