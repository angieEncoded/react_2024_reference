import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart"
import Products from "./components/Shop/Products"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./components/store/ui-slice";
import Notification from "./components/UI/Notification"

// set our checker variable for useEffect outside the component so it is never re-evaluated
let isInitial = true; // NOTE THAT THIS WILL NOT WORK WITH REACT IN STRICT MODE SINCE STRICT MODE WILL ALWAYS RENDER EVERY COMPONENT TWICE


function App() {

  const showCart = useSelector(state => state.ui.showCart);
  const notificationStatus = useSelector(state => state.ui.notification);
  // We can send the http request whenever we see that the cart state has changed
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();


  // And we can use useEffect to monitor for changes - and we can do this in ANY component that can read the state.
  useEffect(() => {
    const sendCartData = async () => {
      try {
        // throw new Error("Just testing")
        dispatch(uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data!"
        }))
        const response = await fetch('http://localhost:3000/cart', {
          method: "POST",
          body: JSON.stringify(cart)
        })

        if(!response.ok){
          throw new Error("Sending cart data failed")
        }

        const responseJson = await response.json(); // dont need to do anything with the response here
        // console.log(responseJson)
        dispatch(uiActions.showNotification({
          status: "success",
          title: "Successfully sent!...",
          message: "Sent Cart Data!"
        }))

      } catch (error) {
        // console.error(error)
        dispatch(uiActions.showNotification({
          status: "error",
          title: "There was a problem",
          message: error.message
        }))
      }
    }

    // Block the useEffect from running on app load
    if(isInitial){
      isInitial = false;
      return;
    }
    // Execute the function
    sendCartData();

  }, [cart]); // will re-execute whenever the cart changes
  // so useSelector sets up a subscription to redux, and useEffect will be aware of this now
  // So we can keep all the logic for updating the card in the reducer
  // and this will let us send the data over to the back end
  // Gives us this "fat" reducer

  return (
    <>
    {notificationStatus && <Notification status={notificationStatus.status} title={notificationStatus.title} message={notificationStatus.message}/>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>

    </>
  );
}

export default App;