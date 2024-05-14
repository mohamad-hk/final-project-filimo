import "./Admin.css";
import Navbar_Admin from "./Navbar/Navbar_Admin";
const Admin = () => {
  return (
    <>
      <div className="container-fluid Admin">
        <div className="row">
          <Navbar_Admin />
          <div className="col-10">
            <h1>خوش آمدید</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
