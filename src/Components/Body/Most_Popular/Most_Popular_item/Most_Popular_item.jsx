import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Most_Popular_item.css";
import { useEffect, useRef } from "react";
import { PiLockFill } from "react-icons/pi";
import { Navigation } from "swiper/modules";
import Shadow_movie2 from "../Most_popular_movie/Most_popular_movie_item/Shadow_movie/Shadow_movie";
import Shadow_movie from "../Most_popular_movie/Most_popular_movie_item/Shadow_movie/Shadow_movie2";
const Most_Popular_item = ({ data }) => {
  const Element = useRef(null);
  useEffect(() => {
    if (data && data.cover) {
      Element.current.style.backgroundImage = `url(${data.cover})`;
    }
  }, [data]);
  return (
    <>
      <div
        ref={Element}
        className="d-flex flex-column justify-content-start pt-5 gap-3   position-relative "
        id="Most_Popular_item"
      >
        <div className="mx-auto z-3" id="item_data">
          <h5 className="text-white fw-bold mb-4">{data.title}</h5>
          <span id="item_director">کارگردان:{data.director}</span>
          <div className="d-flex flex-row gap-3 my-3" id="genres">
            {data.genres?.map((elem) => {
              return (
                <span className="px-3 py-1 rounded-5 text-white" key={elem.id}>
                  {elem.genre}
                </span>
              );
            })}
          </div>
          <p className="text-white fw-bold ">{data.description}</p>
        </div>
        <div id="item_episodes">
          <Swiper
            breakpoints={{
              300: {
                slidesPerView: 2,
                scrollbar: {
                  draggable: true,
                },
              },
              575: {
                slidesPerView: 3,
                scrollbar: {
                  draggable: true,
                },
              },
              768: {
                slidesPerView: 3,
                scrollbar: {
                  draggable: true,
                },
              },
              991: {
                slidesPerView: 3,
                scrollbar: {
                  draggable: true,
                },
              },
              1199: {
                slidesPerView: 4,
                scrollbar: {
                  draggable: true,
                },
              },
            }}
            spaceBetween={10}
            navigation
            modules={[Navigation]}
            className="mySwiper swiper_Most_Popular_item"
          >
            {data.parts?.map((elem) => {
              return (
                <SwiperSlide
                  key={elem.id}
                  className="swiper_slide_Most_Popular_item position-relative rounded-4 "
                >
                  <div className="d-flex flex-column justify-content-start align-items-start w-100">
                    <img
                      className="rounded-4"
                      src={elem.image}
                      alt="not found"
                    />

                    <span className="text-white fw-bold me-2">
                      {elem.title}
                    </span>
                  </div>
                  {elem.status == "locked" ? (
                    <div className="item_episodes_blur position-absolute rounded-4">
                      <PiLockFill className="position-absolute custom_lock rounded-5 p-2" />
                    </div>
                  ) : null}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="position-absolute " id="logo_item">
          <img className="img-fluid" src={data.logo} alt="" />
        </div>
        <Shadow_movie />
        <Shadow_movie2 />
      </div>
    </>
  );
};

export default Most_Popular_item;
