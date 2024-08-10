import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <main className='content'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout