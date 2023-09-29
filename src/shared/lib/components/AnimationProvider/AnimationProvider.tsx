import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type StringType = typeof import('@react-spring/web')
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextProps {
  Gesture?: GestureType
  Spring?: StringType
  isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextProps>({})

export const useAnimationLibs = (): Required<AnimationContextProps> => {
  return useContext(AnimationContext) as Required<AnimationContextProps>
}

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const SpringRef = useRef<StringType>()
  const GestureRef = useRef<GestureType>()
  const [isLoaded, setIsLoaded] = useState(false)

  const getAsyncAnimationModules = useCallback(async () => {
    return await Promise.all([
      import('@react-spring/web'),
      import('@use-gesture/react')
    ])
  }, [])

  useEffect(() => {
    void getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring
      GestureRef.current = Gesture
      setIsLoaded(true)
    })
  }, [getAsyncAnimationModules])

  const value = useMemo(() => ({
    Spring: SpringRef.current,
    Gesture: GestureRef.current,
    isLoaded
  }), [isLoaded])

  return (
    <AnimationContext.Provider
      value={value}
    >
      {children}
    </AnimationContext.Provider>
  )
}
