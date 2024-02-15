import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StatusCode } from "../utils/StatusCode";

export const dealerController = new AbortController();

const initialState = {
    data: [],
    status: StatusCode.IDLE,
};

const dealerSlice = createSlice({
    name: "dealer",
    initialState,
    reducers: {
//        fetchDealer(state, action) {
//            state.data = action.payload;
//        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDealer.pending, (state, action) => {
            state.status = StatusCode.LOADING
        })
        .addCase(getDealer.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = StatusCode.IDLE
        })
        .addCase(getDealer.rejected, (state, action) => {
            state.status = StatusCode.ERROR
        })
    }
});

export const {fetchDealer} = dealerSlice.actions;
export default dealerSlice.reducer;

export const getDealer = createAsyncThunk('dealer/get', async (queryParams) => {
    const API_KEY = process.env.REACT_APP_PUBLIC_DRIVE_CHICAGO_API_KEY;
    const response = await fetch(`https://api.drivechicago.cloud/dealer/search?apiKey=${API_KEY}&${queryParams}`);
    if (!response.ok) {
      throw Error("Unable to retrieve dealers");
    }
    const data = await response.json();
    return data;
  });
