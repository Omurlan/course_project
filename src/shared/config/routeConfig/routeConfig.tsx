import { type RouteProps } from 'react-router-dom'
import { AboutPage } from '@/pages/AboutPage'
import { MainPage } from '@/pages/MainPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { ArticlesPage } from '@/pages/ArticlesPage'
import { ArticlePage } from '@/pages/ArticlePage'
import { ArticleFormPage } from '@/pages/ArticleFormPage'
import { AdminPanelPage } from '@/pages/AdminPanelPage'
import { UserRole } from '@/entities/User'
import { ForbiddenPage } from '@/pages/ForbiddenPage'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLE = 'article',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  ARTICLES = 'articles',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile/', // + :id
  [Routes.ARTICLE]: '/articles/', // + :id
  [Routes.ARTICLES]: '/articles',
  [Routes.ADMIN_PANEL]: '/admin',
  [Routes.ARTICLE_CREATE]: '/articles/new',
  [Routes.ARTICLE_EDIT]: '/articles/:id/edit',
  [Routes.FORBIDDEN]: '/forbidden',
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
    path: RoutePath.admin_panel,
    element: <AdminPanelPage/>,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER]
  },
  {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
]
