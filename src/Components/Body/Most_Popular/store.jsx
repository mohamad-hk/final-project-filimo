import { configureStore } from "@reduxjs/toolkit";
import item_slice_reducer from "./Most_Popular_item_slice_series";
import item_slice_reducer_movies from "./Most_popular_item_slice_movies";

const store = configureStore({
  reducer: {
    series_rendered: item_slice_reducer,
    movies_rendered: item_slice_reducer_movies,
  },
});
export default store;
