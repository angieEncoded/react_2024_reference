import classes from './EventsList.module.css';
import { Link } from 'react-router-dom'
// expects
/*
  {
    id: '',
    image: '',
    title: '', 
    date: ''
  }
*/
function EventsList({ events }) {
  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          // When we are using relative paths in the Router, as we are in this Project, we do not have to have the whole path here
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventsList;
