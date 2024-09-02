// EXAMPLE FILE FOR MULTIPLE STATE SLICES IN ONE PAGE. THSI IS NOW
// BROKEN OUT INTO MULTIPLE PAGES

import { createSlice, configureStore } from "@reduxjs/toolkit";

// set our initial state
const initialCounterState = { counter: 0, showCounter: true }
const initialAuthenticationState = { isAuthenticated: false, serverToken: undefined }

// create a slice out of that state
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            // we ARE allowed to "mutate" the state in here - behind the scenes the toolkit is handling this with a deep copy
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state, data){
            state.counter = state.counter + data.payload.amount // now we need to make sure we access the object redux toolkit made for us
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        },
    }
})

const authenticationSlice = createSlice({
    name: 'Authentication',
    initialState: initialAuthenticationState,
    reducers: {
        login(state){ state.isAuthenticated = true},
        logout(state){ state.isAuthenticated = false}
    }
})

// create the store and point at the reducer function that creates the store
const store = configureStore({
    // using a single reducer
    // reducer: counterSlice.reducer

    // how we can get around having multiple reducers - set an object with our own reducer names
    reducer: {
        counterReducer: counterSlice.reducer,
        authenticationReducer: authenticationSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authenticationActions = authenticationSlice.actions

// now we want to connect the rest of the app to this store
export default store;