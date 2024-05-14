import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "./styles.css";
import { Autoplay, EffectFade } from "swiper/modules";
import Content_slider from "./content_slider/Content_slider";
import Shadow_slider from "./content_slider/Shadow_slider/Shadow_slider";
const Slider = ({
  Slider,
  Slider_section1,
  Slider_section2,
  Slider_section3,
}) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: true,
          waitForTransition: false,
        }}
        speed={2500}
        effect="fade"
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {Slider?.map((elem) => {
          return (
            <SwiperSlide key={elem.id}>
              <img className="img-fluid" src={elem.image} alt="" />
            </SwiperSlide>
          );
        })}
        <Shadow_slider />
        <Content_slider
          Slider_section1={Slider_section1}
          Slider_section2={Slider_section2}
          Slider_section3={Slider_section3}
        />
      </Swiper>
    </>
  );
};
export default Slider;
