import Advertise_content from "./Advertise_content/Advertise_content";
import advertise_logo from "../../../Images/advertise-logowebp.webp";

import "./Advertise.css";
const Advertise = ({ content }) => {
  return (
    <>
      <div className="container-fluid" id="advertise">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center py-5">
            <img className="img-fluid" src={advertise_logo} alt="" />
            <Advertise_content content={content} />
            <button className="btn btn-success fw-bold px-5 py-3 button_buy">
              خرید اشتراک و تماشا
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertise;
