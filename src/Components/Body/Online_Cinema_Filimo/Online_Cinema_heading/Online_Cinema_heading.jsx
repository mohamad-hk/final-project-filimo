import "./Cinema_heading.css";
import { IoIosCheckmark } from "react-icons/io";
const Online_Cinema_heading = ({ Cinema_title }) => {
  return (
    <>
      <div className=" mt-5" id="Cinema_heading">
        <h4 className="text-white text-center fw-bold mb-4">
          سینما آنلاین فیلیمو
        </h4>
        <div className="d-flex flex-column flex-md-row gap-lg-5 justify-content-md-center align-items-center ">
          {Cinema_title?.map((elem) => {
            return (
              <div
                className="ms-4 d-flex flex-row align-items-center justify-content-center gap-2"
                key={elem.id}
              >
                <IoIosCheckmark
                  style={{
                    color: "green",
                    fontSize: "20px",
                    backgroundColor: "rgba(28,181,97,.24)",
                    borderRadius: "20px",
                  }}
                />
                <p className=" mt-3"> {elem.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Online_Cinema_heading;
