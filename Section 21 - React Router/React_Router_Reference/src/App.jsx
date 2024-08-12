import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail"

const router = createBrowserRouter([
  {path:'/', element: <Layout />, errorElement: <Error />, children: [
    {path: '/', element:<Home />},
    {path: '/products', element: <Products /> },
    {path: '/products/:id', element: <ProductDetail /> },
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
