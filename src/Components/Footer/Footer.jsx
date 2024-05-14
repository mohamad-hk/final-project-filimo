import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import { MyContext_footer } from "../root/Rooter";
import { SlOptionsVertical } from "react-icons/sl";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsDisplay } from "react-icons/bs";

import "./Footer.css";
const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show_second, setShow_second] = useState(false);

  const handleClose_second = () => setShow_second(false);
  const handleShow_second = () => setShow_second(true);

  const footer = useContext(MyContext_footer);

  const last_item_footer = () => {
    return (
      <>
        <div
          className="d-inline-block d-md-none"
          variant="primary"
          onClick={handleShow}
        >
          {footer[6].title}
        </div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="position-absolute p-0 m-0">
              {footer[6].items?.map((elem) => {
                return (
                  <li className="list-unstyled mb-3 text-center fw-bold">
                    {elem.item}
                  </li>
                );
              })}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };
  const social_medias_mobile = () => {
    return (
      <>
        <div
          className=" d-md-none"
          variant="primary"
          onClick={handleShow_second}
          id="social_medias_mobile"
        >
          <SlOptionsVertical />
        </div>
        <Offcanvas show={show_second} onHide={handleClose_second}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="position-absolute p-0 m-0">
              {footer[5].items?.map((elem) => {
                return (
                  <li className="list-unstyled mb-3 text-center fw-bold">
                    {elem.item}
                  </li>
                );
              })}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };

  return (
    <>
      <div className="container-fluid position-fixed bottom-0  z-3" id="footer">
        <div className="row">
          <div className="col-12 ">
            {footer?.map((elem) => {
              return (
                <>
                  <div
                    className="position-relative d-inline-block ms-4"
                    key={elem.id}
                    id="item"
                  >
                    {elem.id == 1 ? (
                      <p>
                        <BsDisplay
                          style={{ fontSize: "20px", marginLeft: "3px" }}
                        />
                        {elem.title}
                      </p>
                    ) : null}

                    {elem.id == 6 || elem.id == 5 ? (
                      <p>
                        <RiArrowDownSFill
                          style={{ fontSize: "20px", marginLeft: "3px" }}
                        />
                        {elem.title}
                      </p>
                    ) : null}
                    {elem.id == 2 || elem.id == 3 || elem.id == 4 ? (
                      <p>{elem.title}</p>
                    ) : null}

                    <div className="position-absolute rounded-3" id="items">
                      <ul className=" m-0 p-2">
                        {elem.items?.map((elem1) => {
                          return (
                            <>
                              <li
                                className="list-unstyled mb-3 "
                                key={elem1.id}
                              >
                                {elem1.item}
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  {elem.id == 7 ? last_item_footer() : null}
                  {elem.id == 7 ? social_medias_mobile() : null}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
