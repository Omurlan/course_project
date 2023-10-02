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
