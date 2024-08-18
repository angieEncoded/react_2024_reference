import { DUMMY_PRODUCTS } from '../dummy-products.js';


// Does not need access to anything and should not be recreated every time a component remounts
export const shoppingCartReducer = (state, action) => {

    // check for the action we want
    if(action.type === 'ADD_ITEM'){
        const updatedItems = [...state.items];

        const existingCartItemIndex = updatedItems.findIndex(
            (cartItem) => cartItem.id === action.productid
        );
        const existingCartItem = updatedItems[existingCartItemIndex];

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1,
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            const product = DUMMY_PRODUCTS.find((product) => product.id === action.productid);
            updatedItems.push({
                id: action.productid,
                name: product.title,
                price: product.price,
                quantity: 1,
            });
        }
        return {
            ...state, // not needed, because there is only one value in this state
            items: updatedItems,
        };
    }

    if(action.type === 'UPDATE_QTY'){
        const updatedItems = [...state.items];
        const updatedItemIndex = updatedItems.findIndex(
            (item) => item.id === action.productid
        );

        const updatedItem = {
            ...updatedItems[updatedItemIndex],
        };

        updatedItem.quantity += action.amount;

        if (updatedItem.quantity <= 0) {
            updatedItems.splice(updatedItemIndex, 1);
        } else {
            updatedItems[updatedItemIndex] = updatedItem;
        }

        return {
            ...state,
            items: updatedItems,
        };
    }

    return state; // just send back the existing state if someone did something stupid
}