import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};  

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action) => {
      const findTitle = state.items.some((obj) => obj.Title === action.payload.Title);
      if (findTitle) {
        return;
      } else {
        state.items.push(action.payload);
      }
    },
    remove: (state, action) => {
      state.items = state.items.filter((obj) => obj.Title !== action.payload);
    },
  },
});

export const selectFavorites = (state) => state.favorites;

export const { add, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;