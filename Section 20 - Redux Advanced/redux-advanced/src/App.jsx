import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart"
import Products from "./components/Shop/Products"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification"
import { sendCartData, fetchCartData } from "./components/store/cart-actions";

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

    if(isInitial){
      isInitial = false;
      return;
    }

    // Dispatch the action creator that we set up in the slice
    if(cart.changed){
      dispatch(sendCartData(cart));
    }

  }, [cart]); // will re-execute whenever the cart changes
  // so useSelector sets up a subscription to redux, and useEffect will be aware of this now
  // So we can keep all the logic for updating the card in the reducer
  // and this will let us send the data over to the back end
  // Gives us this "fat" reducer


  // It's apparantly totally legal to have multiple useEffect!!!
  useEffect(() => {
    dispatch(fetchCartData())
  }, [])


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