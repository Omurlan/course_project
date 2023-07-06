import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.PROFILE]: '/profile',
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
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
]
