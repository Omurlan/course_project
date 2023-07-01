import { lazy } from 'react'

export const ProfilePageAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => {
    //  @ts-expect-error test
    resolve(import('./ProfilePage'))
  }, 300)
}))
