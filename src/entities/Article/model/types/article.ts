import { type User } from '@/entities/User'
import { type ArticleBlockType, type ArticleType } from '../const/articleConst'

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title: string
  paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  user: User
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
