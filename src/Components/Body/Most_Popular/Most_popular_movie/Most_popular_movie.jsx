import { Swiper, SwiperSlide } from "swiper/react";
import Most_popular_movie_item from "./Most_popular_movie_item/Most_popular_movie_item";
import { useEffect, useState } from "react";

const Most_popular_movie = ({ movies, imdb_logo }) => {
  const [select_slider, Set_select_slider] = useState();
  const [dataReceived, setDataReceived] = useState(false);

  useEffect(() => {
    if (movies && movies.length > 0) {
      Set_select_slider(movies[0]);
      setTimeout(() => {
        setDataReceived(true);
      }, 500);
    }
  }, [movies]);

  return (
    <>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 3,
            scrollbar: {
              draggable: true,
            },
          },
          768: {
            slidesPerView: 4,
            scrollbar: {
              draggable: true,
            },
          },
          1200: {
            slidesPerView: 6,
          },
        }}
        scrollbar={{ width: "100%", height: "100%" }}
        spaceBetween={20}
        modules={[]}
        className="mySwiper swiper_Most_Popular mb-3"
      >
        {movies?.map((elem, index) => (
          <SwiperSlide
            key={elem.id}
            className={`swiper_slide_Most_Popular ${
              select_slider === elem ? "active" : ""
            }`}
            onClick={() => {
              Set_select_slider(elem);
              setDataReceived(true);
            }}
          >
            <img className="img-fluid rounded-3" src={elem.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      {dataReceived && (
        <Most_popular_movie_item data={select_slider} imdb_logo={imdb_logo} />
      )}
    </>
  );
};

export default Most_popular_movie;
