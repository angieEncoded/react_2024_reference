import React from 'react'
import { Link, useParams } from 'react-router-dom'



const ProductDetail = () => {

  const params = useParams(); // how to egt urlEncoded data
  // console.log(params)

  return (
    <>
      <div>ProductDetail</div>
      {params.id}
      {/* Specify the relative prop to go back to sibling level */}
      <p><Link to=".." relative='path'>Back</Link></p>
    </>

  )
}

export default ProductDetail