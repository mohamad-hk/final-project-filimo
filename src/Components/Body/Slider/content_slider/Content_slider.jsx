import "./Content_slider.css";
import { IoIosCheckmark } from "react-icons/io";
import { PiGift } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";

const Content_slider = ({
  Slider_section1,
  Slider_section2,
  Slider_section3,
}) => {
  return (
    <>
      <div
        className="container-fluid position-absolute z-2"
        id="content_slider"
      >
        <div className="row">
          {Slider_section1?.map((elem) => {
            return (
              <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <p className="text-warning fw-bold">{elem.content}</p>
              </div>
            );
          })}
        </div>
        <div className="row">
          {Slider_section2?.map((elem) => {
            return (
              <div className="col-12  d-flex flex-column justify-content-center align-items-center">
                <p className="text-white fw-bolder fs-1">{elem.content}</p>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-3 gap-lg-5">
              {Slider_section3?.map((elem) => {
                return (
                  <div className="d-flex flex-row align-items-center justify-content-center gap-2">
                    <IoIosCheckmark
                      style={{
                        color: "green",
                        fontSize: "20px",
                        backgroundColor: "rgba(28,181,97,.24)",
                        borderRadius: "20px",
                      }}
                    />
                    <p className=" mt-2">{elem.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div className="">
              <button className="btn fw-bold px-5 py-3 button_buy">
                <BiMoviePlay className="ms-2 fs-5" />
                خرید اشتراک و تماشا
              </button>
            </div>
            <p className="mt-1 fw-bold">
              <PiGift className="ms-2 fs-5" />
              تخفیف ویژه برای کاربران جدید
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content_slider;
