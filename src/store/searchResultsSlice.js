import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StatusCode } from "src/utils/StatusCode";
import axios from "axios";

const initialState = {
  data: [],
  status: StatusCode.IDLE,
};

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState,
  reducers: {
    loadSearchResults: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state, action) => {
        state.status = StatusCode.LOADING;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = StatusCode.IDLE;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = StatusCode.ERROR;
      });
  },
});

export const { loadSearchResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;

export const fetchSearchResults = createAsyncThunk(
  "searchResults/post",
  async (requestData, { rejectWithValue }) => {
    console.log(requestData, 'data-which-requesting');
    try {
      const API_KEY = process.env.REACT_APP_PUBLIC_DRIVE_CHICAGO_API_KEY;
      const baseUrl = `https://api.drivechicago.cloud/vehicle/search?apiKey=${API_KEY}`;
      console.log('Sending Request:', requestData);
      const res = await axios.post(baseUrl, requestData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return res.data; // This returned value will be provided as the payload of the `fulfilled` action
    } catch (error) {
      console.error('Error in fetchSearchResults:', error);

      // Log more details about the error
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received. Request details:', error.request);
      } else {
        console.error('Error details:', error.message);
      }

      // Use rejectWithValue to pass details to the rejected action
      return rejectWithValue(error.message);
    }
  }
);