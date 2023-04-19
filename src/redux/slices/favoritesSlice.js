import { createSlice } from "@reduxjs/toolkit";
import { compareByDate } from "../../functions/sortByDate";
import { sortByDuration } from "../../functions/sortByDuration";
import { compareByTitle } from "../../functions/sortByTitle";
import { compareByRate } from "../../functions/soryByRate";

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
        state.items.sort(compareByTitle);
      }
      if (action.payload === "Duration") {
        state.items.sort(sortByDuration);
      }
      if (action.payload === "Date") {
        state.items.sort(compareByDate);
      }
      if (action.payload === "Order") {
        
      }
      if (action.payload === "Your Rate") {
        state.items.sort(compareByRate)
      }
    },
    addRate: (state, action) => {
      const { item, rate } = action.payload;
      const itemToUpdate = state.items.find((obj) => obj.Title === item.Title);
      if (itemToUpdate) {
        itemToUpdate.rate = rate;
      }
    },
    clearFavorites: () => {
      return initialState;
    }
  },
});

export const selectFavorites = (state) => state.favorites;

export const { add, remove, sortBy, addRate, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
