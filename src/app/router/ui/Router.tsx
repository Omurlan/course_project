import React, { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { type AppRouteProps, routeConfig } from '@/app/router/config/routeConfig'
import { RequireAuth } from '@/app/router/ui/RequireAuth'

const Router = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback="Page loading">
        {route.element}
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />

    )
  }, [])

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        {routeConfig.map(renderWithWrapper)}
      </Routes>
    </Suspense>
  )
}

export default Router
