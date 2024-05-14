import { useRef } from "react";
import { useEffect } from "react";
import "../Most_popular_movie.css";
import Shadow_movie from "./Shadow_movie/Shadow_movie";
import Shadow_movie2 from "./Shadow_movie/Shadow_movie2";
import imdb from "../../../../../Images/icon-imdb.webp";
const Most_popular_movie_item = ({ data }) => {
  const Element_movie = useRef(null);
  useEffect(() => {
    if (data && data.cover) {
      Element_movie.current.style.backgroundImage = `url(${data.cover})`;
    }
  }, [data]);
  return (
    <>
      <div
        ref={Element_movie}
        className="d-flex flex-column justify-content-start pt-5 gap-3   position-relative "
        id="Most_Popular_item_movie"
      >
        <div className="mx-auto z-3" id="item_data">
          <h5 className="text-white fw-bold mb-4">{data.title}</h5>
          <span id="item_director">کارگردان:{data.director}</span>
          <div className="d-flex flex-row gap-3 my-3" id="genres_movie">
            {data.imdb_score ? (
              <>
                <div
                  className="d-flex flex-row justify-content-center align-items-center rounded-5 px-2 "
                  id="imdb_score"
                >
                  <img
                    className="img-fluid"
                    src={imdb}
                    alt=""
                    style={{ backgroundColor: "#151515" }}
                  />
                  <span className="px-2 rounded-4">{data.imdb_score}</span>
                </div>
              </>
            ) : null}

            {data.genres?.map((elem) => {
              return (
                <span className="px-2 rounded-5 text-white">{elem.genre}</span>
              );
            })}
          </div>
          <p className="text-white fw-bold ">{data.description}</p>
          <button className=" btn btn-success button_buy my-2">خرید اشتراک و تماشا</button>

          <div
            className="d-flex flex-row text-white gap-1 fw-bold"
            id="more_data"
          >
            <span>{data.more_data.age} -</span>
            <span>{data.more_data.time} -</span>
            <span>{data.more_data.country_producer} -</span>
            <span>{data.more_data.year} -</span>
            <span>{data.more_data.quality}</span>
          </div>
        </div>
        <div className="position-absolute " id="logo_item_movie">
          <img className="img-fluid" src={data.logo} alt="" />
        </div>
        <Shadow_movie />
        <Shadow_movie2 />
      </div>
    </>
  );
};

export default Most_popular_movie_item;
