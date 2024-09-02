import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./AuthenticationSlice";
import counterSliceReducer from "./CounterSlice";

// create the store and point at the reducer function that creates the store
const store = configureStore({
    // using a single reducer
    // reducer: counterSlice.reducer

    // how we can get around having multiple reducers - set an object with our own reducer names
    reducer: {
        counterReducer: counterSliceReducer,
        authenticationReducer: authenticationReducer
    }
});




// now we want to connect the rest of the app to this store
export default store;