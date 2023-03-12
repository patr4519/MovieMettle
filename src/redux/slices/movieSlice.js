import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {

    }
})

export const selectMovies = (state) => state.movies;

export const {  } = moviesSlice.actions;

export default moviesSlice.reducer;