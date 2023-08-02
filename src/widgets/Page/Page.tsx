import React, { type ComponentProps, type MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react'
import styles from './Page.module.scss'
import cn from 'classnames'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getScrollSave, getScrollSaveByPath, scrollSaveActions } from 'features/ScrollSave'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { type StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface PageProps extends ComponentProps<'div'> {
  onScrollEnd?: () => void
}

export const Page: React.FC<PageProps> = ({ children, onScrollEnd, className, ...rest }) => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const { pathname } = useLocation()

  const scrollPosition = useSelector((state: StateSchema) => getScrollSaveByPath(state, pathname))

  const dispatch = useAppDispatch()

  useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd })

  useLayoutEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  }, [])

  const handleScroll = useThrottle((event: React.UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({
      position: event.currentTarget.scrollTop,
      path: pathname
    }))
  }, 1000)

  return (
    <section
      onScroll={handleScroll}
      ref={wrapperRef}
      className={cn(styles.page, className)}
      {...rest}
    >
      {children}
      <div ref={triggerRef}></div>
    </section>
  )
}
