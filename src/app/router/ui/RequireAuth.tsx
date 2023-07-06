import React, { type FC } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { useLocation, Navigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

export const RequireAuth: FC = ({ children }) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  return <>{children}</>
}
