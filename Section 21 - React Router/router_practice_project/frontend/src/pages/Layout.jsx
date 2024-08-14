import React from 'react'
import MainNavigation from "../components/MainNavigation/MainNavigation"
import { Outlet } from 'react-router-dom'
import { useNavigation } from 'react-router-dom'


const Layout = () => {

  // one way of finding out whether you are waiting on data
  const navigation= useNavigation(); // navigation object has the current page state



  return (
    <>
      <MainNavigation />
      <main>
        {/* One way to solve this... */}
        {navigation.state === 'loading' && <p>Loading...</p>}
        <Outlet />
      </main>
      
    </>
  )
}

export default Layout