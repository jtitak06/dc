import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: ""
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userAuth: (state, action) => {
            state = { token: action.payload }
        }
    }
});

export const { userAuth } = authSlice.actions;
export default authSlice.reducer;