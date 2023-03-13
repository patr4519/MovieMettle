import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialMovies = [
  "The Green Mile",
  "Schindler's List",
  "The Shawshank Redemption",
  "Coco",
  "Interstellar",
  "Pulp Fiction",
  "Back to the Future",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Fight Club",
];
const apiKey = "9fc0fef8";

export const fetchInitMovies = createAsyncThunk(
  "movies/fetchMoviesStatus",
  async () => {
    try {
      const requests = initialMovies.map((item) =>
        axios.get(`http://www.omdbapi.com/?t=${item}&apikey=${apiKey}`)
      );
      const responses = await Promise.all(requests);
      const items = responses.map((r) => r.data);
      return items;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const initialState = {
  movies: [],
  status: "pending",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    searchMovie(state, action) {
      console.log(action.payload)
      console.log(fetchInitMovies(action.payload))
    },
  },
  extraReducers: {
    [fetchInitMovies.pending]: (state) => {
      state.status = "pending";
      state.movies = [];
    },
    [fetchInitMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
      state.status = "filfilled";
    },
    [fetchInitMovies.rejected]: (state) => {
      state.movies = [];
      state.status = "rejected";
    },
  },
});

export const selectMovies = (state) => state.movies;

export const { searchMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
