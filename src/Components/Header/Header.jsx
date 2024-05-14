import { useContext } from "react";
import { MyContext } from "../root/Rooter";
import "./Header.css";
import { Link } from "react-router-dom";
import filimo_logo from "../../Images/filimo-logo.svg";

const Header = () => {
  const { Menu, Customer } = useContext(MyContext);

  return (
    <>
      <div className="container-fluid" id="header">
        <div className="row">
          <div className="col-12 col-md-12 col-xl-10 mx-auto py-2">
            <div className="row">
              <div className="col-4 col-md-6 ">
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <div className=" bg-black me-md-5" id="logo">
                    <img
                      className="img-fluid"
                      src={filimo_logo}
                      alt="not found"
                    />
                  </div>
                  <div>
                    <ul className="d-none d-lg-flex flex-row justify-content-center align-items-center  mt-3 gap-5  ">
                      {Menu?.map((elem) => {
                        return (
                          <li className="list-unstyled" key={elem.id}>
                            {elem.content}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-8 col-md-6" id="register">
                <div className=" mt-lg-2 ">
                  <ul className="d-flex flex-row justify-content-end  align-items-center p-0 m-0">
                    <li className="list-unstyled ms-2 ms-md-3">
                      <Link className="text-decoration-none" to="/Admin">
                        <button
                          className="btn btn-primary p-0 px-md-2 py-2"
                          id="button_admin"
                        >
                          پنل ادمین
                        </button>
                      </Link>
                    </li>
                    {Customer?.map((elem) => {
                      return (
                        <li
                          className="list-unstyled text-center ms-2 ms-md-3"
                          key={elem.id}
                        >
                          <button
                            className="btn px-md-3 p-0 py-2"
                            id={`button${elem.id}`}
                          >
                            {elem.content}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
