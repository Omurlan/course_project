import { type MutableRefObject, useEffect } from 'react'

export interface UseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    if (callback) {
      const options: IntersectionObserverInit = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)

      observer.observe(triggerElement)
    }

    return () => {
      if (observer) {
        observer.unobserve(triggerElement)
      }
    }
  }, [])
}
