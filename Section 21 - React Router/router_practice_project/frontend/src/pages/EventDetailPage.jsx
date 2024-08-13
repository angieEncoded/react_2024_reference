import React from 'react'
import { useParams } from 'react-router-dom'




const EventDetailPage = () => {

  const {id} = useParams();

  return (
    <div>Details Page for Event {id}</div>

  )
}

export default EventDetailPage