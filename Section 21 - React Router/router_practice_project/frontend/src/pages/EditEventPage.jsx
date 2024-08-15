import React from 'react'
import EventForm from "../components/EventForm/EventForm"
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'

const EditEventPage = () => {

  const data = useRouteLoaderData('event-detail');

  return (
    <EventForm event={data.event} method={'patch'}/>
  )
}





export default EditEventPage