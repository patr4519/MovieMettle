import { configureStore } from "@reduxjs/toolkit";
import movies from "./slices/movieSlice";
import favorites from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: { movies, favorites },
});
