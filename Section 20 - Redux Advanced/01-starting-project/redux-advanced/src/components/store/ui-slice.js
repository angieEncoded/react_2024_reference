import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false} 

const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        toggleCart(state) { state.showCart = !state.showCart }
    }
})

const uiActions = uiSlice.actions

export {uiSlice as default, uiActions}