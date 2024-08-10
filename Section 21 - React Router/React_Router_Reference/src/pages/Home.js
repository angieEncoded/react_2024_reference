import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>My Home Page</h1>
        <p>Go to the <Link to="/products" >list of products</Link></p>
    </div>
  )
}

export default Home