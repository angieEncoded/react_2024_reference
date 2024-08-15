import React, { Suspense } from 'react'
import EventItem from '../components/EventItem/EventItem';
import { Await, defer, redirect, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList/EventsList';



const EventDetailPage = () => {

  const { event, events } = useRouteLoaderData('event-detail')
  // const data = useRouteLoaderData('event-detail');

  return (
    <>

      {/* Each await needs its own suspense block */}
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>

    </>
  )
}



// Copied from EVentsList
const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {

    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500
    })
  }
  const resData = await response.json();
  return resData.events
}



const loadEvent = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`)

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch that event" }), {
      status: 500
    })
  } else {
    const resData = await response.json();
    return resData.event
  }
}



// How to handle multiple requsts in defer
const loader = async ({ request, params }) => {
  return defer({
    event: await loadEvent(params.id), // make sure this data is loaded before we navigate 
    events: loadEvents() // this one will be loaded after
  })
}



const action = async ({ request, params }) => {
  const id = params.id
  const results = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method
  });
  if (!results.ok) {
    throw new Response(JSON.stringify({ message: "Could not delete that event" }), {
      status: 500
    })
  } else {
    return redirect('/events');
  }
}







export { EventDetailPage as default, loader, action }