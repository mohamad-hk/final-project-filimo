import { useState } from "react";
import Navbar_Admin from "../../../Navbar/Navbar_Admin";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Create_Item_Free_Content = () => {
  const check_url = /^(http|https):\/\/[^ "]+$/;
  const [link, Set_link] = useState("");
  const [title, Set_title] = useState("");
  const navigate = useNavigate();
  const submithandler = (e) => {
    e.preventDefault();
  };

  const create_item = async () => {
    try {
      const res = await axios.post(
        "https://662e624da7dda1fa378ccdf2.mockapi.io/free-content",
        {
          link,
          title,
        }
      );
      Swal.fire({
        title: "آیتم مورد نظر با موفقیت ایجاد شد",
        icon: "success",
      });
      navigate("/Admin/free-content");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar_Admin />
          <div className="col-10">
            <div className="row">
              <div className="col-6 mx-auto mt-4">
                <form
                  className="form-control bg-info"
                  onSubmit={(e) => {
                    submithandler(e);
                  }}
                >
                  <div className=" d-flex flex-column gap-4 mt-4">
                    <label className="text-white " htmlFor="">
                      نام فیلم
                      <input
                        className="me-2"
                        type="text"
                        onChange={(e) => Set_title(e.target.value)}
                      />
                      {title.length < 5 ? (
                        <p>نام فیلم باید حداقل 5 کاراکتر باشد</p>
                      ) : null}
                    </label>

                    <label className="text-white " htmlFor="">
                      عکس فیلم
                      <textarea
                        className="me-2 text-start"
                        type="text"
                        rows={4}
                        cols={40}
                        onChange={(e) => Set_link(e.target.value)}
                      />
                      {check_url.test(link) ? null : (
                        <p>آدرس وارد شده اشتباه است</p>
                      )}
                    </label>
                  </div>
                  <button
                    className="btn btn-success mt-4 px-4"
                    onClick={() => {
                      create_item();
                    }}
                    disabled={
                      title.length > 5 && check_url.test(link)
                        ? null
                        : "disabled"
                    }
                  >
                    ایجاد
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create_Item_Free_Content;
