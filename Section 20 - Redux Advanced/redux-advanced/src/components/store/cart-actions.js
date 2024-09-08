import { uiActions } from "./ui-slice"
import { cartActions } from "./cart-slice"

// moved this outside so both functions has access
const dummycartid = "mycart"

// Action creator - keeps the logic out of the components
export const sendCartData = (cart) => {
    return async (dispatch) => {
          try {
            // throw new Error("Just testing")
            dispatch(uiActions.showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending Cart Data!"
            }))

            // NOTE, I added this since working with json-server requires there to already be an endpoint for a PUT
            // So I added a blank entry with id:mycart. I'm not convinced this was the best way to explain this topic...
            const cartWithId = {...cart, id: "mycart"}
            // console.log("got here")
            const response = await fetch(`http://localhost:3000/cart/${dummycartid}`, {
              method: "PUT",
              body: JSON.stringify(cartWithId)
            })

            if(!response.ok){ throw new Error("Sending cart data failed") }

            const responseJson = await response.json(); // dont need to do anything with the response here
            // console.log(responseJson)
            dispatch(uiActions.showNotification({
              status: "success",
              title: "Successfully sent!...",
              message: "Sent Cart Data!"
            }))

          } catch (error) {
            console.error(error)
            dispatch(uiActions.showNotification({
              status: "error",
              title: "There was a problem",
              message: error.message
            }))
          }
    }
}

export const fetchCartData = () => {
    return async(dispatch) => {
        try {
            const response = await fetch(`http://localhost:3000/cart/${dummycartid}`);
            if (!response.ok) { throw new Error("Something happened when fetching") };
            const data = await response.json();
            // console.log(data)
            dispatch(cartActions.replaceCart(data));
            // Max had to do this with firebase, but since I had already loaded an "id" key which keeps the record there,
            // I didn't have trouble adding and removing the cart.
            // dispatch(cartActions.replaceCart({
            //     totalQuantity: data.totalQuantity,
            //     items: data.items || []
            // }))
        } catch (error) {
            // console.error(error)
            dispatch(uiActions.showNotification({
                status: "error",
                title: "There was a problem",
                message: error.message
                }))
        }
    }
}

