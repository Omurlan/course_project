import { type StateSchema } from '@/app/providers/StoreProvider'
import { createSelector } from '@reduxjs/toolkit'

export const getScrollSave = (state: StateSchema) => state.scrollSave
export const getScrollSaveByPath = createSelector(
  getScrollSave,
  (state: StateSchema, pathname: string) => pathname,
  (scroll, pathname) => scroll[pathname] || 0
)
