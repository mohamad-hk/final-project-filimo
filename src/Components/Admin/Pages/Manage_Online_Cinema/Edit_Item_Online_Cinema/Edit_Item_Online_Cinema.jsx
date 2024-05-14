import { useLocation, useNavigate } from "react-router-dom";
import Navbar_Admin from "../../../Navbar/Navbar_Admin";
import { useEffect, useState } from "react";
import "./Edit_Item_Online_Cinema.css"
const Edit_Item_Online_Cinema = () => {
  const check_url = /^(http|https):\/\/[^ "]+$/;
  const [get_data, Set_get_data] = useState({});
  const [new_image, Set_new_image] = useState("");
  const [new_title, Set_new_title] = useState("");
  const [new_director, Set_new_director] = useState("");
  const [new_genre, Set_new_genres] = useState([]);
  const [new_genre2, Set_new_genres2] = useState([]);
  const navigate = useNavigate();
  const get_info = useLocation();
  let id = new URLSearchParams(get_info.search).get("id");
  const get_item = async () => {
    const response = await fetch(
      `https://662e624da7dda1fa378ccdf2.mockapi.io/online_cinema/${id}`
    );
    const data = await response.json();
    Set_get_data(data);
  };
  const submithandler = (e) => {
    e.preventDefault();
  };
  const update_item = async () => {
    const new_genres = [new_genre, new_genre2].map((genre, index) => ({
      id: index + 1,
      genre: genre.trim(),
    }));
    try {
      const response1 = await fetch(
        `https://662e624da7dda1fa378ccdf2.mockapi.io/online_cinema/${id}`,
        {
          method: "PUT",

          body: JSON.stringify({
            id: `${id}`,
            image: new_image,
            title: new_title,
            director: new_director,
            genres: new_genres,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      navigate("/Admin/online-filimo");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    get_item();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (get_data) {
        Set_new_title(get_data.title || "");
        Set_new_director(get_data.director || "");
        Set_new_image(get_data.image || "");
        Set_new_genres(get_data.genres[0]?.genre || "");
        Set_new_genres2(get_data.genres[1]?.genre || "");
      }
    }, 500);
  }, [get_data]);
  return (
    <>
      <div className="container-fluid Admin">
        <div className="row">
          <Navbar_Admin />
          <div className="col-10">
            <div className="row">
              <div className="col-10 col-md-10 col-lg-6 mx-auto mt-4">
                <div className="form_Online_Cinema">
                  <form
                    className="form-control bg-info"
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
                          className="me-2"
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
                        کارگردان
                        <input
                          className="me-2"
                          type="text"
                          value={new_director}
                          onChange={(e) => Set_new_director(e.target.value)}
                        />
                        {new_director.length < 5 ? (
                          <span className="text-danger fw-bold  position-absolute top-100">
                            نام فیلم باید حداقل 5 کاراکتر باشد
                          </span>
                        ) : null}
                      </label>
                      <label
                        className="text-white  position-relative"
                        htmlFor=""
                      >
                        عکس فیلم
                        <textarea
                          className="me-2"
                          type="text"
                          rows={4}
                          cols={40}
                          value={new_image}
                          onChange={(e) => Set_new_image(e.target.value)}
                        />
                        {check_url.test(new_image) ? null : (
                          <span>آدرس وارد شده اشتباه است</span>
                        )}
                      </label>
                      <label className="text-white " htmlFor="">
                        ژانر اول
                        <input type="text" value={new_genre} />
                        <select
                          className="me-2"
                          name="genres"
                          onChange={(e) => {
                            Set_new_genres(e.target.value);
                          }}
                        >
                          <option value="درام">درام</option>
                          <option value="کمدی">کمدی</option>
                          <option value="عاشقانه">عاشقانه</option>
                          <option value="خانوادگی">خانوادگی</option>
                          <option value="موزیکال">موزیکال</option>
                        </select>
                      </label>
                      <label className="text-white " htmlFor="">
                        ژانر دوم
                        <input type="text" value={new_genre2} />
                        <select
                          className="me-2"
                          name="genres"
                          onChange={(e) => {
                            Set_new_genres2(e.target.value);
                          }}
                        >
                          <option value="درام">درام</option>
                          <option value="کمدی">کمدی</option>
                          <option value="عاشقانه">عاشقانه</option>
                          <option value="خانوادگی">خانوادگی</option>
                          <option value="موزیکال">موزیکال</option>
                        </select>
                      </label>
                    </div>
                    <button
                      className="btn btn-success mt-4 px-4"
                      onClick={() => {
                        update_item();
                      }}
                      disabled={
                        new_title.length > 5 &&
                        new_director.length > 5 &&
                        new_genre.length > 0 &&
                        check_url.test(new_image)
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

export default Edit_Item_Online_Cinema;
