import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import additionalMovies from "../../assets/listOfMovies";

const initialMovies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",
  "12 Angry Men",
  "Schindler's List",
  "The Lord of the Rings: The Return of the King",
  "Pulp Fiction",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Forrest Gump",
];

const apiKey = "9fc0fef8";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMoviesStatus",
  async (inputValue) => {
    try {
      if (inputValue) {
        const request = await axios.get(
          `http://www.omdbapi.com/?t=${inputValue}&apikey=${apiKey}`
        );
        return [request.data];
      } else {
        const requests = initialMovies.map((item) =>
          axios.get(`http://www.omdbapi.com/?t=${item}&apikey=${apiKey}`)
        );
        const responses = await Promise.all(requests);
        const items = responses.map((r) => r.data);
        return items;
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchAdditionalMovies = createAsyncThunk(
  "movies/fetchAdditionalMoviesStatus",
  async (numMovies) => {
    console.log(numMovies)
    let newList = additionalMovies.slice(numMovies, numMovies + 10);
    try {
      const requests = newList.map((item) =>
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
  items: [],
  status: "idle",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addAdditionalMovies: (state, action) => {
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.items = action.payload;
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = "pending";
      state.items = [];
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.status = "rejected";
      state.items = [];
    });
    builder.addCase(fetchAdditionalMovies.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.items.push(...action.payload);
    });
  },
});

export const { addAdditionalMovies } = moviesSlice.actions;

export const selectMovies = (state) => state.movies;

export default moviesSlice.reducer;
