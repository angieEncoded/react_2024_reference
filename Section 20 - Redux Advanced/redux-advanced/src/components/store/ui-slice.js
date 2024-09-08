import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false, notification: null}

const uiSlice = createSlice({
    name: "ui",
    initialState: initialState,
    reducers: {
        toggleCart(state) { state.showCart = !state.showCart },
        showNotification(state, action){state.notification = {
            status: action.payload.status,
            title: action.payload.title,
            message: action.payload.message
        }}

    }
})

const uiActions = uiSlice.actions

export {uiSlice as default, uiActions}