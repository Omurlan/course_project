import React, { Suspense } from 'react'
import cn from 'classnames'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import Router from 'app/router/ui/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const MyComponent = () => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />

          <div className="page-wrapper">
            <Router />
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default MyComponent
