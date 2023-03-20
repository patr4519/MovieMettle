import { createSlice } from "@reduxjs/toolkit";
import { compareByDate } from "../../functions/sortByDate";
import { sortByDuration } from "../../functions/sortByDuration";
import { compareByTitle } from "../../functions/sortByTitle";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.items = action.payload;
      } else {
        state.items.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter((obj) => obj.Title !== action.payload);
    },
    sortBy: (state, action) => {
      if (action.payload === "Title") {
        state.items = state.items.sort(compareByTitle);
      }
      if (action.payload === "Duration") {
        state.items = state.items.sort(sortByDuration);
      }
      if (action.payload === "Order") {
        const favorites = JSON.parse(localStorage.getItem("favorites"));
        state.items = favorites;
      }
      if (action.payload === "Date") {
        state.items = state.items.sort(compareByDate);
      }
    },
  },
});

export const selectFavorites = (state) => state.favorites;

export const { add, remove, sortBy } = favoritesSlice.actions;

export default favoritesSlice.reducer;
