import { createSlice } from "@reduxjs/toolkit";

// set our initial state
const initialCounterState = { counter: 0, showCounter: true }

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

// now we want to connect the rest of the app to this store
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;