import { useEffect, useState } from "react";
import Navbar_Admin from "../../Navbar/Navbar_Admin";
import axios from "axios";
import Content_Online_Cinema from "./Content_Online_Cinema";
import { Link, useNavigate } from "react-router-dom";
import Delete_Item_Online_Cinema from "./Delete_Item_Online_Cinema/Delete_Item_Online_Cinema";
import { CiCirclePlus } from "react-icons/ci";

const Manage_Online_Cinema = () => {
  const [data_online_cinema, Set_online_cinema] = useState(null);
  const navigate = useNavigate();
  const create_page = () => {
    navigate("/admin/online-filimo/Create_item");
  };
  const fetch_Data = async () => {
    const res_mock_Api = await axios.get(
      "https://662e624da7dda1fa378ccdf2.mockapi.io/online_cinema"
    );
    Set_online_cinema(res_mock_Api.data);
  };

  useEffect(() => {
    fetch_Data();
  }, []);
  return (
    <>
      <div className="container-fluid Admin">
        <div className="row">
          <Navbar_Admin />
          <div className="col-10 col-sm-10 mx-auto">
            <div className="row p-sm-2">
              <div
                className="col-12 col-sm-6 col-md-6 col-xl-4 d-flex flex-row  p-2 border border1 border-primary rounded-4 position-relative mb-lg-2"
                id="add_online_cinema"
                onClick={create_page}
              >
                <CiCirclePlus id="add_icon_online_cinema" />
              </div>
              {data_online_cinema?.map((elem) => {
                return (
                  <div
                    className="col-12 col-sm-6 col-md-6 col-xl-4 d-flex flex-row  p-2 border border1 border-primary rounded-4 position-relative mb-lg-2"
                    key={elem.id}
                    id="card_online_cinema"
                  >
                    <img
                      className="img-fluid rounded-3 image_custom"
                      src={elem.image}
                      alt=""
                    />
                    <Content_Online_Cinema
                      title={elem.title}
                      director={elem.director}
                      genres={elem.genres}
                    />

                    <div
                      className=" position-absolute"
                      id="buttons_online_cinema"
                    >
                      <ul className="d-flex flex-row gap-2 p-0 m-0 ms-2 mb-2">
                        <li className="list-unstyled">
                          <Delete_Item_Online_Cinema id={elem.id} />
                        </li>
                        <li className="list-unstyled">
                          <Link
                            to={`/Admin/online-filimo/Edit_item?id=${elem.id}`}
                          >
                            <button className="btn btn-primary">ویرایش</button>
                          </Link>
                        </li>
                      </ul>
                    </div>
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

export default Manage_Online_Cinema;
