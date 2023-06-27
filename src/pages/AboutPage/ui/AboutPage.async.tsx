import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => {
    // @ts-expect-error test
    resolve(import('./AboutPage'))
  }, 300)
}))
