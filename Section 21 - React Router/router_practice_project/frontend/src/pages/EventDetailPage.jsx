import React from 'react'
import EventItem from '../components/EventItem/EventItem';
import { redirect, useLoaderData , useRouteLoaderData} from 'react-router-dom';



const EventDetailPage = () => {

  const data = useRouteLoaderData('event-detail');

  return (
    <EventItem event={data.event}/>
  )
}

// react router sents in these two
const loader = async ({request, params}) => {

  // request.url
  // params.id

  const results = await fetch(`http://localhost:8080/events/${params.id}`)

  if (!results.ok) {
    throw new Response(JSON.stringify({message: "Could not fetch that event"}), {
      status: 500
    }) 
  } else {
    return results;
  }

}

const action = async ({request, params}) => {
  
  const id = params.id
  const results = await fetch(`http://localhost:8080/events/${id}`, {
    // method: 'DELETE'
    method: request.method
  });
  if (!results.ok) {
    throw new Response(JSON.stringify({message: "Could not delete that event"}), {
      status: 500
    }) 
  } else {
    return redirect('/events');
  }

}







export {EventDetailPage as default, loader, action}