import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./Free_content.css";
import { Navigation } from "swiper/modules";
import Free_Content_item from "./Free_Content_item/Free_Content_item";
import Free_tag from "./Free_tag/Free_tag";
import Free_Content_heading from "./Free_Content_heading/Free_Content_heading";

const Free_Content = ({ content, tag }) => {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center px-3 "
        id="free_content"
      >
        <Free_Content_heading />
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 3,
              scrollbar: {
                draggable: true,
              },
            },
            575: {
              slidesPerView: 4,
              scrollbar: {
                draggable: true,
              },
            },

            768: {
              slidesPerView: 5,
              spaceBetween: 20,
              scrollbar: {
                draggable: true,
              },
            },

            1200: {
              slidesPerView: 6,
              spaceBetween: 20
            },
          }}
          navigation
          modules={[Navigation]}
          className="mySwiper swiper_free_content"
        >
          {content?.map((elem) => {
            return (
              <SwiperSlide
                key={elem.id}
                className="swiper_slide_free_content position-relative mt-3"
              >
                <Free_Content_item image={elem.link} title={elem.title} />
                <Free_tag tag={tag} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Free_Content;
