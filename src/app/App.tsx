import React, { Suspense } from 'react'
import './styles/index.scss'
import Router from 'app/router/ui/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const MyComponent = () => {
  return (
    <div className='app'>
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
