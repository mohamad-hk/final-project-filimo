import axios from "axios";
import Swal from "sweetalert2";

const Delete_Item_Online_Cinema = ({ id }) => {
  const delete_item = () => {
    Swal.fire({
      title: "آیا از حذف آن اطمینان دارید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `https://662e624da7dda1fa378ccdf2.mockapi.io/online_cinema/${id}`
          );
        } catch (error) {
          console.log(error.message);
        }
        Swal.fire({
          title: "با موفقیت حذف شد",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <button className="btn btn-primary" onClick={delete_item}>
        حذف
      </button>
    </>
  );
};

export default Delete_Item_Online_Cinema;
