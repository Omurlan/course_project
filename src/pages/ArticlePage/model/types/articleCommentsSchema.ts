import { type EntityState } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'

export interface ArticleCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean
  error: string | null

}
