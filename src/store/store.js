import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import savedCarSlice from "./savedCarSlice";
import dealerSlice from "./dealerSlice";
import homeSearchSlice from "./homeSearchSlice";
import searchInputSlice from "./searchInputSlice";
import searchResultsSlice from "./searchResultsSlice";
import articleSlice from "./articleSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("searchResultsState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Error loading state from local storage:", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("searchResultsState", serializedState);
  } catch (error) {
    console.error("Error saving state to local storage:", error);
  }
};

const store = configureStore({
  reducer: {
    savedCar: savedCarSlice,
    dealer: dealerSlice,
    homeSearch: homeSearchSlice,
    searchInput: searchInputSlice,
    searchResults: searchResultsSlice,
    article: articleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
  preloadedState: loadState(),
});

store.subscribe(() => {
  const state = store.getState();
  saveState({
    ...state, // Save the entire state
  });
});


export default store;