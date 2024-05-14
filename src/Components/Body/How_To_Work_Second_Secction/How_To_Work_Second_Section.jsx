import Section_image from "../How_To_Work_First_Secction/Section_image/Section_image";
import Section_heading from "../How_To_Work_First_Secction/Section_heading/Section_heading";
import Section_content from "../How_To_Work_First_Secction/Section_content/Section_content";
import "./How_To_Work_Second_Section.css";
import { FaChevronLeft } from "react-icons/fa";

const How_To_Work_Second_Section = ({ section2 }) => {
  return (
    <>
      <div className="container-fluid" id="section2">
        <div className="row  py-3 ">
          <div className="col-12 d-md-none">
            <Section_heading heading={section2.heading} />
          </div>
          <div className="col-12 py-5 position-relative">
            <div className="row">
              <div className="col-8 col-xl-6 me-auto d-none d-md-block ">
                <Section_image image={section2.image[1]} />
              </div>
              <div className="order-2 order-md-0 px-md-3 " id="content">
                <div className="d-none d-md-block">
                  <Section_heading heading={section2.heading} />
                </div>
                <Section_content content={section2.content} />
                <button className=" btn text-white fw-bold text-center">
                  ویدیوهای آموزشی تماشا با تلویزیون
                  <FaChevronLeft className="me-1" />
                </button>
              </div>
              <div className="col-12 d-md-none order-1 order-md-0">
                <Section_image image={section2.image[0]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How_To_Work_Second_Section;
