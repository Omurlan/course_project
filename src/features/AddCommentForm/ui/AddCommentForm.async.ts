import { lazy } from 'react'
import type React from 'react'
import { type AddCommentFormProps } from 'features/AddCommentForm/ui/AddCommentForm'

export const AddCommentFormAsync = lazy<React.ComponentType<AddCommentFormProps>>(async () => await new Promise((resolve) => {
  setTimeout(() => {
    resolve(import ('./AddCommentForm'))
  },
  300)
}))
