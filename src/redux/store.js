import { configureStore } from "@reduxjs/toolkit";
import movies from "./slices/movieSlice";
import favorites from "./slices/favoritesSlice";
import curUser from "./slices/curUserSlice";

export const store = configureStore({
  reducer: { movies, favorites, curUser },
});
