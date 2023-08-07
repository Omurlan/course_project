import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticlePage } from 'pages/ArticlePage'
import { ArticleFormPage } from 'pages/ArticleFormPage'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLE = 'article',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ARTICLES = 'articles',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile/', // + :id
  [Routes.ARTICLE]: '/articles/', // + :id
  [Routes.ARTICLES]: '/articles',
  [Routes.ARTICLE_CREATE]: '/articles/new',
  [Routes.ARTICLE_EDIT]: '/articles/:id/edit',
  [Routes.NOT_FOUND]: '*'
}

export const routeConfig: AppRouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />
  },
  {
    path: RoutePath.about,
    element: <AboutPage />
  },
  {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true
  },
  {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true
  },
  {
    path: `${RoutePath.article}:id`,
    element: <ArticlePage />,
    authOnly: true
  },
  {
    path: `${RoutePath.article_create}`,
    element: <ArticleFormPage />,
    authOnly: true
  },
  {
    path: `${RoutePath.article_edit}`,
    element: <ArticleFormPage />,
    authOnly: true
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
]
