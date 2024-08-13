import React from 'react'
import MainNavigation from "../components/MainNavigation/MainNavigation"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  )
}

export default Layout