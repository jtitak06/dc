import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StatusCode } from "src/utils/StatusCode";

export const homeSearchController = new AbortController();

const initialState = {
    data: []
};

const homeSearchSlice = createSlice({
    name: "homeSearch",
    initialState,
    reducers: {
//        loadHomeSearch(state, action) {
//            state.data = action.payload
//        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getHomeSearch.pending, (state, action) => {
            state.status = StatusCode.LOADING
        })
        .addCase(getHomeSearch.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = StatusCode.IDLE
        })
        .addCase(getHomeSearch.rejected, (state, action) => {
            state.status = StatusCode.ERROR
        })
    }
});

export const { loadHomeSearch } = homeSearchSlice.actions;
export default homeSearchSlice.reducer;

export const getHomeSearch = createAsyncThunk('homeSearch/get', async () => {
    const API_KEY = process.env.REACT_APP_PUBLIC_DRIVE_CHICAGO_API_KEY;
    const response = await fetch(`https://api.drivechicago.cloud/lookup/yearMakeModels?apiKey=${API_KEY}`);
    if (!response.ok) {
        throw Error("Unable to retrieve options")
    }
    const result = await response.json()
    return result
})