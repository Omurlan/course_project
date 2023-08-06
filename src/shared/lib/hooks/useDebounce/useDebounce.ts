import { useCallback, useRef } from 'react'

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timer = useRef<NodeJS.Timeout>()

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      // eslint-disable-next-line n/no-callback-literal
      callback(...args)
    }, delay)
  }, [callback, delay])
}
