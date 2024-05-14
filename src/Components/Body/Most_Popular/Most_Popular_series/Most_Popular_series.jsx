import { Swiper, SwiperSlide } from "swiper/react";
import Most_Popular_item from "../Most_Popular_item/Most_Popular_item";
import { useEffect, useState } from "react";
import "./Most_popular_slider.css";
const Most_Popular_slider = ({ series }) => {
  const [select_slider, Set_select_slider] = useState(null);
  const [dataReceived_series, setDataReceived] = useState(false);
  useEffect(() => {
    if (series && series.length > 0) {
      Set_select_slider(series[0]);
      setTimeout(() => {
        setDataReceived(true);
      }, 500);
    }
  }, [series]);
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
        className=" swiper_Most_Popular mb-3"
      >
        {series?.map((elem) => {
          return (
            <SwiperSlide
              key={elem.id}
              className={`swiper_slide_Most_Popular ${
                select_slider === elem ? "active" : ""
              }`}
              onClick={() => {
                Set_select_slider(elem);
              }}
            >
              <img className="img-fluid rounded-3" src={elem.image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {dataReceived_series && <Most_Popular_item data={select_slider} />}
    </>
  );
};

export default Most_Popular_slider;
