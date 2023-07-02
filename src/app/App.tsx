import React, { Suspense, useEffect } from 'react'
import './styles/index.scss'
import Router from 'app/router/ui/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [])

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

export default App
