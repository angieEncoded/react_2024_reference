import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList/EventsList'

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  // if (data.isError) {
  //   return <p>There was some error - could not fetch events etc</p>
  // }


  return (
    <>
      <EventsList events={events} />
    </>
  );
}


// Loader will be called right when we start navigating to the page
const loader = async () => {
  const response = await fetch('http://localhost:8080/events');
  // console.log(response.ok)
  if (!response.ok) {
    // We could return our own object
    // return { isError: true, message: "Could not fetch events." }
    
    // we could thrown an error with the Response constructor
    throw new Response(JSON.stringify({message: "Could not fetch events"}), {
      status: 500
    }) 

    // We could use react router's built in json function - this doesn't seem to work as well, and its one extra function that
    // can go wrong so I am not going to use this
    // return json({message: "Could not fetch Events"}, {status: 500})


    // When an error is thrown in a loader, something special happens
    // react will render the closest error element  
  } else {
    return response; // we really only need to return this when using the loader function
  }

}


// how to handle multiple exports with a default
export { EventsPage as default, loader }
