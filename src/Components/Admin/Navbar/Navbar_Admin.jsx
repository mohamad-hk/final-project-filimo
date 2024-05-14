import { Link, useLocation } from "react-router-dom";
import "../Admin.css";
const Navbar_Admin = () => {
  const location = useLocation();
  return (
    <>
      <div className="col-12 col-sm-2 p-0 m-0 Menu_Admin">
        <h3 className="text-white fw-bold me-2 mb-4">پنل ادمین</h3>
        <ul className=" p-0 m-0">
          <li
            className={`list-unstyled text-center border border-1 border-bottom-0 py-2 ${
              location.pathname === "/Admin/free-content" ? "active_menu" : ""
            }`}
          >
            <Link
              className="text-decoration-none text-warning"
              to="/Admin/free-content"
            >
              محتوای رایگان
            </Link>
          </li>
          <li
            className={`list-unstyled text-center border border-1 p-2  ${
              location.pathname === "/Admin/online-filimo" ? "active_menu" : ""
            }`}
          >
            <Link
              className="text-decoration-none text-warning"
              to="/Admin/online-filimo"
            >
              سینما آنلاین
            </Link>
          </li>
          <li className="list-unstyled bg-danger text-center  border border-1 p-2">
            <Link className="text-decoration-none text-black " to="/">
              خروج
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar_Admin;
