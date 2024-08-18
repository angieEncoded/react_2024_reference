import { createContext } from "react";
import { useState, useReducer } from "react";
import { shoppingCartReducer } from "./cart-reducer"; // moving this into its own file seems to have worked...


// React creates the overall object that will be provided with .Provider
// and our values are accessible through it
// setting default values helps with autocompletion
export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    updateItemQuantity: () => { }
});



// Now we want to store and manage all the context in here
export default function CartContextProvider({ children }) {

    const initialState = {
        items: [],
    }

    const [cartState, dispatch] = useReducer(shoppingCartReducer, initialState);
    // const [shoppingCart, setShoppingCart] = useState(initialState); // no longer used because the reducer manages this state now

    // Moved everything into a reducer
    function handleAddItemToCart(id) {
        dispatch({
            type: 'ADD_ITEM',
            productid: id
        })
    }

    function handleUpdateCartItemQuantity(productId, amount) {
        dispatch({
            type: 'UPDATE_QTY',
            productid: productId,
            amount: amount
        })
    }

    // create our context outside for readability
    const contextValues = {
        // items: shoppingCart.items,
        items: cartState.items, // using the reducer hook
        addItemToCart: handleAddItemToCart,
        updateItemQuantity: handleUpdateCartItemQuantity
    }

    return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>
}


