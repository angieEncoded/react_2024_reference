import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  // remember this for triggering a pdf
  const navigate = useNavigate();


  const navigateHandler = () => {
    navigate('/products')
  }

  return (
    <>
      <button onClick={navigateHandler}>Download some thing</button>
    </>
 
  )
}

export default Home