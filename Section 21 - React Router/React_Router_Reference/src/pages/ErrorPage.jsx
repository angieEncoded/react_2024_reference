import React from 'react'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
  return (
    <>
        <MainNavigation />
        <div className='content'>That page does not exists</div>
    </>
  )
}

export default ErrorPage