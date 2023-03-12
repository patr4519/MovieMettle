import { configureStore } from "@reduxjs/toolkit";
import movies from "./slices/movieSlice";

export const store = configureStore({
  reducer: { movies },
});
