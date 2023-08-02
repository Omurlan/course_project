import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ScrollSaveSchema } from '../types/scrollSaveSchema'

const initialState: ScrollSaveSchema = {}

const scrollSaveSlice = createSlice({
  name: 'scrollSave',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state[payload.path] = payload.position
    }
  }
})

export const { reducer: scrollSaveReducer, actions: scrollSaveActions } = scrollSaveSlice
