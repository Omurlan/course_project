import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AddCommentFormSchema } from '../types/addCommentForm'

const initialState: AddCommentFormSchema = {
  text: '',
  error: null
}

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(loginByUsername.pending, (state, action) => {
  //     state.error = null
  //     state.isLoading = true
  //   })
  //   builder.addCase(loginByUsername.fulfilled, (state) => {
  //     state.isLoading = false
  //   })
  //   builder.addCase(loginByUsername.rejected, (state, action) => {
  //     state.isLoading = false
  //     state.error = action.payload as string
  //   })
  // }
})

export const { reducer: addCommentFormReducer, actions: addCommentFormActions } = addCommentFormSlice
