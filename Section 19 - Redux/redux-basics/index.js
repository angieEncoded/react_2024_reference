const redux = require ("redux"); // thiis can NOT be converted to an ES6 module


// What we need to use redux
// 1. Central data "store"
// 2. A reducer function that manages the state in the store
// 3. An action that dispatches to the reducer to make things happen
// 4. A component, or something that will consume this data


// Create a reducer function - receives the old state and an "Action", will always return the new state
// must be a "pure" function. Same inputs always lead to the same output, and no side effects inside the function
// We want to have a fallback default value for the state
const counterReducer = (state = {counter : 0}, action) => {

    if(action === "ADDONE"){
        return {
            state: state.counter + 1
        }
    }
    if(action === "SUBTRACTONE"){
        return {
            state: state.counter - 1
        }
    }

    // return exsting state if we came in here with no real action
    return state;
}



// Create the store for our data and pass the reducer function that will manage this state
const store = redux.createStore(counterReducer);


// Now we need someone to subscribe to the store
// NOTE - we will NOT see this console log until we have dispatched an action
const counterSubscriber = () => {
    const currentState = store.getState();
    console.log(`Inside the subscriber: ${currentState.counter}`)
}

// if we wanted to see the initial state, before we have dispatched some action, we could do that here
console.log(store.getState())


// This is how we tell the store that this function wants to subscribe to this store
store.subscribe(counterSubscriber)


// and some actions to do
store.dispatch({
    type: "ADDONE"
})

store.dispatch({
    type: "SUBTRACTONE"
})



