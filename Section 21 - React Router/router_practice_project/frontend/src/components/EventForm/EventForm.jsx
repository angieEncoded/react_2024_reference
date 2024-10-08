import { useNavigate, Form, useNavigation, useActionData } from 'react-router-dom';
import {json, redirect} from 'react-router-dom'

import classes from './EventForm.module.css';

function EventForm({ method, event }) {

  const data = useActionData(); // get the response in case of a 422 error

  const navigate = useNavigate();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';


  function cancelHandler() {
    navigate('..');
  }


  // Requirements for using the react router to extract data
  // all form elements must have the 'name' attribute
  // Form element needs to be replaced with the Form component provided by react router



  return (
    // We can trigger this form to go to some other path by adding the action prop and sending to to some other path
    // <Form method='post' action="/any/other/path" className={classes.form}>

    <Form method={method} className={classes.form}>
      {data && data.errors &&
        <ul>
          {Object.values(data.errors).map(error => <li key={error}>{error}</li>)}
          {/* Removed all the requireds to test the server side validation */}
        </ul>
      }
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" defaultValue={event ? event.title : ''} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image"  defaultValue={event ? event.image : ''} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date"  defaultValue={event ? event.date : ''} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5"  defaultValue={event ? event.description : ''} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}

        </button>
      </div>
    </Form>
  );
}


const action = async ({request, params}) => {

  const method = request.method
  const data = await request.formData();
  console.log(params.id)

  const eventData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }


  let url = `http://localhost:8080/events`;
  if (method === 'PATCH'){
    const id = params.id;
    url = `${url}/${id}`
  }

  const response = await fetch(url, {
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








export {EventForm as default, action};
