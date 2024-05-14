import { useEffect, useRef } from "react";
import "./Online_Cinema.css";
import Online_Cinema_Content from "./Online_Cinema_Content/Online_Cinema_Content";
import Online_cinema_Image from "./Online_Cinema_Image/Online_cinema_Image";
import Online_Cinema_heading from "./Online_Cinema_heading/Online_Cinema_heading";
import cinema_cover from "../../../Images/cover-cinama.webp"
const Online_Cinema_Filimo = ({
  online_cinema_content,
  Cinema_title,
}) => {
  const background_ref = useRef();

  useEffect(() => {
    if (online_cinema_content && cinema_cover) {
      background_ref.current.style.backgroundImage = `url(${cinema_cover})`;
    }
  }, [background_ref]);
  return (
    <>
      <div ref={background_ref} className="container-fluid" id="Online_Cinema">
        <div className="row">
          <div className="col-12 col-md-10 mx-auto ">
            <Online_Cinema_heading Cinema_title={Cinema_title} />
            <div
              className="row justify-content-center px-2"
              id="Online_Cinema_Content"
            >
              {online_cinema_content?.map((elem) => {
                return (
                  <div
                    className="col-12 col-lg-5 d-flex flex-row gap-3 my-3 mx-3 p-2 rounded-4 box"
                    key={elem.id}
                  >
                    <Online_cinema_Image image={elem.image} />
                    <Online_Cinema_Content
                      title={elem.title}
                      director={elem.director}
                      genres={elem.genres}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Online_Cinema_Filimo;
