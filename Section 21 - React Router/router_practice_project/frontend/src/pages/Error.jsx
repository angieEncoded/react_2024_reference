import React from 'react'
import PageContent from '../components/PageContent/PageContent'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation/MainNavigation';

const Error = () => {

  const error = useRouteError();
  console.log(error)
  // error.status
  // error.message

  let title = 'An Error Occured';
  let message = 'Something went wrong';
  // console.log(error.status)

  if (error.status === 500 ){

    // If we use react router's json function we don't have to put the JSON.parse
    // message = error.data.message;
    message = JSON.parse(error.data).message;
  }

  if(error.status === 404){
    title = 'Not found'
    message =  'Could not find resource or page'
  }

  return (
    <>
    <MainNavigation />
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  </>
  )
}

export default Error