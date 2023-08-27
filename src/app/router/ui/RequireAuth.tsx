import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData, getUserRoles, type UserRole } from 'entities/User'
import { useLocation, Navigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface RequireAuthProps {
  children: JSX.Element
  roles?: UserRole[]
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData)
  const location = useLocation()
  const userRoles = useSelector(getUserRoles)

  console.log(auth)

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true
    }

    return Boolean(roles.some((role) => userRoles?.includes(role))
    )
  }, [roles, userRoles])

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} replace />
  }

  return <>{children}</>
}
