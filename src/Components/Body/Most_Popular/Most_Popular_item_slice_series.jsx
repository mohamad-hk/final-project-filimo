import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSeries = createAsyncThunk("/series/fetchSeries", async () => {
  try {
    const res = await axios.get(
      "https://mohamad-hk.github.io/final-project-react-db/db.json"
    );
    return res.data.Most_popular_series;
  } catch (error) {
    throw error;
  }
});

const seriesSlice = createSlice({
  name: "series_rendered",
  initialState: {
    item_series: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeries.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeries.fulfilled, (state, action) => {
        state.item_series = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchSeries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default seriesSlice.reducer;
