import Section_heading from "./Section_heading/Section_heading";
import Section_content from "./Section_content/Section_content";
import Section_image from "./Section_image/Section_image";
import "./How_To_Work_First_Section.css";
const How_To_Work_First_Section = ({ section1 }) => {
  return (
    <>
      <div className="container-fluid pb-5 px-3" id="section1">
        <div className="row">
          <div className="col-12 mx-auto d-flex flex-column flex-md-row  justify-content-center align-items-center  ">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 d-md-none order-1 order-sm-0">
                <Section_heading heading={section1.heading} />
                <Section_image image={section1.image[0]} />
              </div>
              <div className="d-none d-md-block col-md-6">
                <Section_image image={section1.image[1]} />
              </div>
              <div className="col-12 col-md-6 order-2 order-sm-0">
                <div className="d-none d-md-block">
                  <Section_heading heading={section1.heading} />
                </div>
                <Section_content content={section1.content} />
                <button className="btn text-white button_buy fw-bold">
                  خرید اشتراک و تماشا
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default How_To_Work_First_Section;
