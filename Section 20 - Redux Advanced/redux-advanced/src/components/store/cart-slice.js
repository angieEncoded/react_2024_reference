import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [], totalQuantity: 0, totalAmount: 0, changed: false }



const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        } ,
        addItemToCart(state, action) {
            const itemToAdd = action.payload; // how redux will give to us
            const existingItem = state.items.find(item => item.id === itemToAdd.id); // How do you prove you exist?
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem){   // remember you CANNOT DO THIS (mutate state) with vanilla redux
                state.items.push({
                    name: itemToAdd.title,
                    id: itemToAdd.id,
                    price: itemToAdd.price,
                    quantity: 1,
                    totalPrice: itemToAdd.price});
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + itemToAdd.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id)
            state.changed = true;
            state.totalQuantity--;
            if (existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id); // remove the one item from the array
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
})






export const cartActions = cartSlice.actions;
export default cartSlice