import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async () => {
    try {
      const { data } = await axios.get(
        "https://64116313e96e5254e2d3e6c8.mockapi.io/favorites"
      );
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action) => {
      const findTitle = state.items.some(
        (obj) => obj.Title === action.payload.Title
      );
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
  extraReducers: (builder) => {
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(fetchFavorites.pending, (state) => {
      state.items = [];
    });
    builder.addCase(fetchFavorites.rejected, (state) => {
      state.items = [];
    });
  }
});

export const selectFavorites = (state) => state.favorites;

export const { add, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;
