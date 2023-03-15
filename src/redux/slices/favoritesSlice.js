import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchMovies = createAsyncThunk(
//   "movies/fetchMoviesStatus",
//   async (inputValue) => {
//     try {
//       if (inputValue) {
//         const request = await axios.get(
//           `http://www.omdbapi.com/?t=${inputValue}&apikey=${apiKey}`
//         );
//         return [request.data];
//       } else {
//         const requests = initialMovies.map((item) =>
//           axios.get(`http://www.omdbapi.com/?t=${item}&apikey=${apiKey}`)
//         );
//         const responses = await Promise.all(requests);
//         const items = responses.map((r) => r.data);
//         return items;
//       }
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
// );

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("add");
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchMovies.fulfilled, (state, action) => {
  //       state.status = "fulfilled";
  //       state.items = action.payload;
  //     });
  //     builder.addCase(fetchMovies.pending, (state) => {
  //       state.status = "pending";
  //       state.items = [];
  //     });
  //     builder.addCase(fetchMovies.rejected, (state) => {
  //       state.status = "rejected";
  //       state.items = [];
  //     });
  //   },
});

export const selectFavorites = (state) => state.favorites;

export const { add } = favoritesSlice.actions;

export default favoritesSlice.reducer;
