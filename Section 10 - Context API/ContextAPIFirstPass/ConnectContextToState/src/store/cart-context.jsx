// We can create a simple context like this

import {createContext} from 'react'

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {} // add dummy function to help with auto completion
});



