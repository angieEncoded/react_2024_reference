import { useFetcher } from 'react-router-dom';
import classes from './newslettersignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {

  // use if we want this fetching on every page
  const fetcher = useFetcher();
  const { data, state  } = fetcher; // pull out the current state and the data


  // check the state of the signup
  useEffect(() => {
    if(state === 'idle' && data && data.message){
      window.alert(data.message)
    }

  }, [data, state])


  // add the fetcher on the form to prevent triggering a route transition, and then target the action
  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
