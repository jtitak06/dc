import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        zip: "",
        distance: 10,
        type: "New",
        certified: false,
        yearFrom: "",
        yearTo: "",
        make: "",
        modelArray: [],
        colorsArray: [],
        priceArray: [],
        mileageArray: [],
        bodyArray: [],
        engineArray: [],
        transmissionArray: [],
        trainArray: [],
    };

const searchInputSlice = createSlice({
    name: "searchInput",
    initialState,
    reducers: {
        updateSearchParams: (state, action) => {
          return {
            ...state,
            ...action.payload,
          };
        },
      },
});

export const { updateSearchParams } = searchInputSlice.actions;
export default searchInputSlice.reducer;