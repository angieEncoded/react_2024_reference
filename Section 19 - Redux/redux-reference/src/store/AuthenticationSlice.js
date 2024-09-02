
import { createSlice } from "@reduxjs/toolkit";

// set our initial state
const initialAuthenticationState = { isAuthenticated: false, serverToken: undefined }

const authenticationSlice = createSlice({
    name: 'Authentication',
    initialState: initialAuthenticationState,
    reducers: {
        login(state){ state.isAuthenticated = true},
        logout(state){ state.isAuthenticated = false}
    }
})

export const authenticationActions = authenticationSlice.actions
export default authenticationSlice.reducer;