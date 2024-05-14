import Buttons_Child_Filimo from "./Buttons_Child_Filimo/Buttons_Child_Filimo";
import Content_Child_Filimo from "./Content_Child_Filimo/Content_Child_Filimo";
import Image_Child_Filimo from "./Image_Child_Filimo/Image_Child_Filimo";
import "./Child_Filimo.css";
const Child_Filimo = (Child_Content) => {
  const data = Child_Content.Child_Content;
  return (
    <>
      <div className="coontainer-fluid" id="Child_Filimo">
        <div className="row px-0 pt-5 m-0">
          <div className="col-12 col-lg-8 mx-lg-auto">
            <div className="row">
              <div className="col-12 col-md-6 order-1  order-md-0">
                <Image_Child_Filimo image={data.image} />
              </div>
              <div className="col-12 col-md-6 order-0  ">
                <div
                  className="d-flex flex-column justify-content-center mt-sm-3 mt-md-1 mt-lg-4 mt-xl-5"
                  id="Content_Child_Filimo"
                >
                  <Content_Child_Filimo
                    content={[data.heading, data.description]}
                  />
                </div>
                <Buttons_Child_Filimo buttons={data.buttons} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Child_Filimo;
