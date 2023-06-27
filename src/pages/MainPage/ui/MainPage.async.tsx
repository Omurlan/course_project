import { lazy } from 'react'

export const MainPageAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => {
    //  @ts-expect-error test
    resolve(import('./MainPage'))
  }, 300)
}))
