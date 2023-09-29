import React, { memo, type ReactNode, useCallback, useEffect } from 'react'
import styles from './Drawer.module.scss'
import cn from 'classnames'
import { Portal } from '@headlessui/react'
import { Overlay } from '../Overlay/Overlay'
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider'

const height = window.innerHeight - 100

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const DrawerContent = memo((props: DrawerProps) => {
  const { children, onClose, isOpen, className } = props

  console.log(isOpen)

  const { Spring, Gesture } = useAnimationLibs()

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  useEffect(() => {
    if (isOpen) {
      open()
    }
  }, [isOpen])

  const open = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [])

  const close = useCallback((velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose
    })
  }, [])

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], movement: [_, my], cancel }) => {
      if (oy < -70) {
        cancel()
      }

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          open()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
  )

  const display = y.to((py) => (py < height ? 'block' : 'none'))

  return (
    <Portal>
      <div className={cn(styles.drawer, className, {
        [styles.opened]: isOpen
      })}>
        <Overlay onClick={close} />
        <Spring.a.div
          {...bind()}
          className={styles.sheet}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>

  )
})

export const Drawer = memo(({ children, ...rest }: DrawerProps) => {
  const { isLoaded } = useAnimationLibs()

  console.log(isLoaded)

  if (!isLoaded) {
    return null
  }

  return (
    <DrawerContent {...rest}>
      {children}
    </DrawerContent>
  )
})
