import React, { Suspense, useEffect } from 'react'
import './styles/index.scss'
import Router from 'app/router/ui/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInitiated, userActions } from 'entities/User'

const App = () => {
  const dispatch = useDispatch()
  const initiated = useSelector(getUserInitiated)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [])

  return (
    <div className='app'>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {initiated && <Router/>}
        </div>
      </Suspense>
    </div>
  )
}

export default App
