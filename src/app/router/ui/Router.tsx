import React, { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { type AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig'
import { RequireAuth } from 'app/router/ui/RequireAuth'

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
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />

    )
  }, [])

  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          {routeConfig.map(renderWithWrapper)}
        </Routes>
      </Suspense>
    </div>
  )
}

export default Router
