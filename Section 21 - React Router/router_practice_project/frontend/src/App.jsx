import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import Layout from "./pages/Layout"
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage"
import NewEventPage from "./pages/NewEventPage"
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from "./pages/EventDetailPage"
import EditEventPage from "./pages/EditEventPage"
import EventsLayout from './pages/EventsLayout'
import Error from './pages/Error'
import {action as formSubmissionAction} from "./components/EventForm/EventForm"
import Newsletter, {action as signupAction} from "./pages/Newsletter"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> }, // index route for root
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true, element: <EventsPage />, loader: eventsLoader// we can access this in all "lower" level routes, this is imported from the file we use it in
          }, // index route for the original
          {
            path: ':id',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [ // wrap all our routes with the root route and everyone can access the loader
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: "edit", element: <EditEventPage />, action: formSubmissionAction }
            ]
          },
          { path: "new", element: <NewEventPage />, action: formSubmissionAction },

        ]
      },
      {path: 'newsletter', element: <Newsletter />, action: signupAction},
    ]
  }]
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
