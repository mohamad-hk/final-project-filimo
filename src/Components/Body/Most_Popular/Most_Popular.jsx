import "./Most_Popular.css";
import Most_Popular_slider from "./Most_Popular_series/Most_Popular_series";
import { useDispatch, useSelector } from "react-redux";
import { fetchSeries } from "./Most_Popular_item_slice_series";

import { useEffect, useState } from "react";
import { fetchMovies } from "./Most_popular_item_slice_movies";
import Most_popular_movie from "./Most_popular_movie/Most_popular_movie";

const Most_Popular = ({ imdb_logo }) => {
  const dispatch = useDispatch();
  const dispatch_movies = useDispatch();
  const [selected_button, Set_selected_button] = useState("series");
  const [add_clas, Set_add_class] = useState("");
  const toggleClass = () => {
    Set_add_class(add_clas === "" ? "clicked" : "");
  };
  useEffect(() => {
    dispatch(fetchSeries());
    dispatch_movies(fetchMovies());
    toggleClass();
  }, []);
  const render_series = () => {
    dispatch(fetchSeries());
    Set_selected_button("series");
  };
  const render_movies = () => {
    dispatch_movies(fetchMovies());
    Set_selected_button("movies");
  };
  const seriesButtonClass = selected_button === "series" ? add_clas : "";
  const moviesButtonClass = selected_button === "movies" ? add_clas : "";

  const { item_series } = useSelector((state) => state.series_rendered);
  const { item_movies } = useSelector((state) => state.movies_rendered);
  return (
    <div className="pb-5" id="Most_Popular">
      <div className="mb-4 d-flex mx-md-auto" id="Heading_Most_Popular">
        <h3 className="text-white fw-bold ms-2">محبوب ترین های فیلیمو</h3>
        <div
          className=" d-flex flex-row  justify-content-center align-items-center rounded-5 mt-2"
          id="buttons_categories"
        >
          <button
            className={`btn p-0 m-0 fw-bold px-4 py-1 rounded-5 ${seriesButtonClass}`}
            onClick={render_series}
          >
            سریال
          </button>
          <button
            className={`btn p-0 m-0 fw-bold px-4 py-1 rounded-5 ${moviesButtonClass}`}
            onClick={render_movies}
          >
            فیلم
          </button>
        </div>
      </div>
      {selected_button === "series" && (
        <Most_Popular_slider series={item_series} />
      )}

      {selected_button === "movies" && (
        <Most_popular_movie movies={item_movies} imdb_logo={imdb_logo} />
      )}
    </div>
  );
};

export default Most_Popular;
