import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
        <h1>Some awesome products</h1>
        <p>Go to the <Link to="/" >Home Page</Link></p>
    </>

  )
}

export default Products