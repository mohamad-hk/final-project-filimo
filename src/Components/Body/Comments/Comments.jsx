import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

import "./Comments.css";
import Comment_item from "./Comment/Comment_item";
import Comments_heading from "./Comments_heading/Comments_heading";

const Comments = ({ Comment }) => {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-start position-relative pt-5 "
        id="Comments"
      >
        <Comments_heading />
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
          }}
          slidesPerView={3}
          spaceBetween={35}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          modules={[Navigation, Autoplay]}
          className=" swiper_comments pt-5 px-3 "
        >
          {Comment?.map((elem) => {
            return (
              <SwiperSlide className=" p-1 p-md-3 rounded-4 swiper-slide_comments mt-3">
                <Comment_item
                  key={elem.id}
                  user={elem.user}
                  Comment={elem.comment}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Comments;
