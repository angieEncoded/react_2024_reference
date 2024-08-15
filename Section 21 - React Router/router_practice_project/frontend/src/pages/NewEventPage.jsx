import React from 'react'
import EventForm from '../components/EventForm/EventForm'
import { redirect } from 'react-router-dom'

const NewEventPage = () => {
  return (
    <EventForm method={'post'}/>
  )
}

const action = async ({request, params}) => {

  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }

  const response = await fetch(`http://localhost:8080/events`, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })


  if(response.status === 422){
    return response;
  }


  if (!response.ok){
    throw new Response(JSON.stringify({message: "Could not save that event"}), {
      status: 500
    }) 
  } else {
    return redirect('/events');
  }
}



export {NewEventPage as default, action}