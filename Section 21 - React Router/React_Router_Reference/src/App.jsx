import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail"

const router = createBrowserRouter([
  {path:'/', element: <Layout />, errorElement: <Error />, children: [
    //{path: '/', element:<Home />}, // below is alternative to this
    {index: true, element:<Home />}, // set as index to make this the default path, not required
    {path: '/products', element: <Products /> },
    {path: '/products/:id', element: <ProductDetail /> }, // how to add dynmaic ids
  ]}
])


function App() {
  return (
  
  <>
    <RouterProvider router={router} />
  
  </>
  )
}

export default App;
