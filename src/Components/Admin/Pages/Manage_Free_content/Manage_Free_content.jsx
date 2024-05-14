import { useEffect, useState } from "react";
import Navbar_Admin from "../../Navbar/Navbar_Admin";
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";
import Delete_Item_Free_Content from "./Delete_Item_Free_Content/Delete_Item_Free_Content";
import { Link, useNavigate } from "react-router-dom";
const Manage_Free_content = () => {
  const [data_free_content, Set_free_content] = useState(null);
  const navigate = useNavigate();
  const create_page = () => {
    navigate("/admin/free-content/Create_item");
  };
  const fetch_Data = async () => {
    const res_mock_Api = await axios.get(
      "https://662e624da7dda1fa378ccdf2.mockapi.io/free-content"
    );
    Set_free_content(res_mock_Api.data);
  };
  useEffect(() => {
    fetch_Data();
  }, []);
  return (
    <div className="container-fluid Admin">
      <div className="row">
        <Navbar_Admin />
        <div className="col-6 col-sm-10 mx-auto ">
          <div className="row me-2">
            <div
              className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-lg-2 my-2 d-flex flex-column justify-content-center align-items-center border border1 border-primary rounded-4 position-relative p-3"
              onClick={create_page}
            >
              <CiCirclePlus id="add_icon" />
            </div>
            {data_free_content?.map((elem) => {
              return (
                <>
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 me-1 mx-lg-2 my-2 d-flex flex-column justify-content-center align-items-center border border1 border-primary rounded-4 position-relative p-3 ">
                    <img
                      className="img-fluid rounded-3 image_custom"
                      src={elem.link}
                      alt=""
                    />
                    <p className=" fw-bold">{elem.title}</p>
                    <div className="">
                      <ul className="d-flex flex-row gap-2 p-0 m-0 ms-2 mb-2">
                        <li className="list-unstyled">
                          <Delete_Item_Free_Content id={elem.id} />
                        </li>
                        <li className="list-unstyled">
                          <Link
                            to={`/Admin/free-content/Edit_item?id=${elem.id}`}
                          >
                            <button className="btn btn-primary">ویرایش</button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage_Free_content;
