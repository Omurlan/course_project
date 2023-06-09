import { type RouteProps } from 'react-router-dom'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about'
}

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />
  },
  {
    path: RoutePath.about,
    element: <AboutPage />
  }
]
