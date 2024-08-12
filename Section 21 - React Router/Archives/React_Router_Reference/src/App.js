import { createBrowserRouter, RouterProvider } from 'react-router-dom' // import this function so we can define the routes
import Home from './pages/Home';
import Products from './pages/Products';
import Layout from './pages/Layout';
import ErrorPage from './pages/ErrorPage';

// LEFT OFF ON LECTURE 10


// Call this function and pass it the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
