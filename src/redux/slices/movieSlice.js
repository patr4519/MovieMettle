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

export const fetchMovie = createAsyncThunk(
  "movies/fetchMoviesStatus",
  async (inputValue) => {
    try {
      const request = await axios.get(
        `http://www.omdbapi.com/?t=${inputValue}&apikey=${apiKey}`
      );
      return [request.data];
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const initialState = {
  movies: [],
  status: "idle",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInitMovies.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.movies = action.payload;
    });
    builder.addCase(fetchInitMovies.pending, (state) => {
      state.status = "pending";
      state.movies = [];
    });
    builder.addCase(fetchInitMovies.rejected, (state) => {
      state.status = "rejected";
      state.movies = [];
    });
  },
});

export const selectMovies = (state) => state.movies;

export default moviesSlice.reducer;
