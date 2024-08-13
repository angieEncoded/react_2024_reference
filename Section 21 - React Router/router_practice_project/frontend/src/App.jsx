import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import Layout from "./pages/Layout"
import EventsPage from "./pages/EventsPage"
import NewEventPage from "./pages/NewEventPage"
import EventDetailPage from "./pages/EventDetailPage"
import EditEventPage from "./pages/EditEventPage"
import NavigationError from "./pages/NavigationError"
import EventsLayout from './pages/EventsLayout'

const router = createBrowserRouter([
  {path: '/', element: <Layout />, errorElement: <NavigationError />, children: [
    {index: true, element: <HomePage />}, // index route for root
    {path: 'events', element: <EventsLayout />, errorElement: <NavigationError />, children: [
      {index: true, element: <EventsPage />}, // index route for the original
      {path: ':id', element: <EventDetailPage />},
      {path: "new", element: <NewEventPage /> },
      {path: ":id/edit" , element: <EditEventPage />}
    ]}
  ]}]
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
