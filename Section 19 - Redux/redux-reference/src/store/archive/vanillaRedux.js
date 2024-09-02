import { createStore } from 'redux'

const initialState = { counter: 0, showCounter: true }
// NOTE: State will be OVERWRITTEN, it will NOT BE MERGED
// If you do not set something, it's not gonna be there!
// You also should NEVER mutate the existing state

const counterReducer = (state = initialState, action) => {

    if(action.type === "increase"){
        return {
            counter: state.counter + action.amount,
            showCounter: true
        }
    }

    if(action.type === "ADDONE"){
        return {
            counter: state.counter + 1,
            showCounter: true
        }
    }

    if (action.type === "SUBTRACTONE"){
        return {
            counter: state.counter - 1,
            showCounter: true
        }
    }

    if (action.type === "toggle"){
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }


    return state;
}

// create the store and point at the reducer function that creates the store
const store = createStore(counterReducer);


// now we want to connect the rest of the app to this store
export default store;



// how we subscribed and used before
// const counterSubscriber = () => {
//     const currentState = store.getState();
//     console.log(currentState)
// }
// store.subscribe(counterSubscriber)


// dispatch some actions
// store.dispatch({type: "ADDONE"})
// store.dispatch({type: "SUBTRACTONE"})npm 