import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("/movies/fetchMovies", async () => {
  try {
    const res = await axios.get(
      "https://mohamad-hk.github.io/final-project-react-db/db.json"
    );
    return res.data.Most_popular_movies;
  } catch (error) {
    throw error;
  }
});

const moviesSlice = createSlice({
  name: "movies_rendered",
  initialState: {
    item_movies: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.item_movies = action.payload;
        state.loading = false;
        state.error = null; 
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
