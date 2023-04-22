import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialMovies = [
  "The Godfather",
  "The Dark Knight",
  "Forrest Gump",
  "The Green Mile",
  "Schindler's List",
  "The Shawshank Redemption",
  "Coco",
  "Interstellar",
  "Pulp Fiction",
  "Back to the Future",
  "Fight Club",
];

const additionalMovies = [
  "The Godfather: Part II",
  "The Lord of the Rings: The Fellowship of the Ring",
  "The Silence of the Lambs",
  "The Matrix",
  "Star Wars: Episode IV - A New Hope",
  "The Lord of the Rings: The Return of the King",
  "Goodfellas",
  "Seven Samurai",
  "City of God",
  "The Prestige",
  "The Departed",
  "Saving Private Ryan",
  "Gladiator",
  "Inception",
  "The Lion King",
  "The Usual Suspects",
  "The Intouchables",
  "Amélie",
  "The Truman Show",
  "Titanic",
  "The Terminator",
  "Aliens",
  "Jaws",
  "The Exorcist",
  "Jurassic Park",
  "The Shining",
  "Blade Runner",
  "The Good, the Bad and the Ugly",
  "The Magnificent Seven",
  "One Flew Over the Cuckoo's Nest",
  "A Clockwork Orange",
  "Apocalypse Now",
  "The Bridge on the River Kwai",
  "Lawrence of Arabia",
  "Gone with the Wind",
  "Casablanca",
  "Citizen Kane",
  "It's a Wonderful Life",
  "Rear Window",
  "12 Angry Men",
  "Psycho",
  "Breaking bad",
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
    console.log(numMovies);
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
