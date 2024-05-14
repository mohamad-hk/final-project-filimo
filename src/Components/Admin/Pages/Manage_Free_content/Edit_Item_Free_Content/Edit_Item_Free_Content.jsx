import { useLocation, useNavigate } from "react-router-dom";
import Navbar_Admin from "../../../Navbar/Navbar_Admin";
import { useEffect, useState } from "react";
import "./Edit_Item_Free_Content.css";
const Edit_Item_Free_Content = () => {
  const check_url = /^(http|https):\/\/[^ "]+$/;
  const [get_data, Set_get_data] = useState({});
  const [new_link, Set_new_link] = useState("");
  const [new_title, Set_new_title] = useState("");
  const navigate = useNavigate();
  const get_info = useLocation();
  let id = new URLSearchParams(get_info.search).get("id");
  const get_item = async () => {
    const response = await fetch(
      `https://662e624da7dda1fa378ccdf2.mockapi.io/free-content/${id}`
    );
    const data = await response.json();
    Set_get_data(data);
  };
  const submithandler = (e) => {
    e.preventDefault();
  };
  const update_item = async () => {
    try {
      const response1 = await fetch(
        `https://662e624da7dda1fa378ccdf2.mockapi.io/free-content/${id}`,
        {
          method: "PUT",

          body: JSON.stringify({
            id: `${id}`,
            title: new_title,
            link: new_link,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      navigate("/Admin/free-content");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    get_item();
  }, []);
  useEffect(() => {
    if (get_data) {
      Set_new_title(get_data.title || "");
      Set_new_link(get_data.link || "");
    }
  }, [get_data]);
  return (
    <>
      <div className="container-fluid Admin">
        <div className="row">
          <Navbar_Admin />
          <div className="col-10">
            <div className="row">
              <div className="col-10 col-md-10 col-lg-6 mx-auto mt-4 ">
                <div className="form_Free_Content">
                  <form
                    className="form-control bg-info "
                    onSubmit={(e) => {
                      submithandler(e);
                    }}
                  >
                    <div className=" d-flex flex-column gap-5 mt-4">
                      <label
                        className="text-white position-relative "
                        htmlFor=""
                      >
                        نام فیلم
                        <input
                          className="me-4"
                          type="text"
                          value={new_title}
                          onChange={(e) => Set_new_title(e.target.value)}
                        />
                        {new_title.length < 5 ? (
                          <span className="text-danger fw-bold  position-absolute top-100">
                            نام فیلم باید حداقل 5 کاراکتر باشد
                          </span>
                        ) : null}
                      </label>
                      <label
                        className="text-white position-relative"
                        htmlFor=""
                      >
                        عکس فیلم
                        <textarea
                          className="me-2"
                          type="text"
                          rows={4}
                          cols={40}
                          value={new_link}
                          onChange={(e) => Set_new_link(e.target.value)}
                        />
                        {check_url.test(new_link) ? null : (
                          <span className="text-danger fw-bold  position-absolute top-100">
                            آدرس وارد شده اشتباه است
                          </span>
                        )}
                      </label>
                    </div>
                    <button
                      className="btn btn-success mt-5 px-4"
                      onClick={() => {
                        update_item();
                      }}
                      disabled={
                        new_title.length > 5 && check_url.test(new_link)
                          ? null
                          : "disabled"
                      }
                    >
                      ویرایش
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit_Item_Free_Content;
