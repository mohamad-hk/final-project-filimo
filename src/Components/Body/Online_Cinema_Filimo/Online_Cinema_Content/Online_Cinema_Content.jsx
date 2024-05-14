import "./Online_Cinema_Content.css";
const Online_Cinema_Content = ({ title, director, genres }) => {
  return (
    <>
      <div className="position-relative w-100 " id="Cinema_Content">
        <div className=" position-absolute start-0  ms-2 mt-2 rounded-5 px-1" id="tag">
          <img
            className="img-fluid"
            src="https://www.filimo.com/assets/web/ui/img-ugnSfCQdq1MdoMws3NbA/campaigns/nosub-v_new/ticket.png"
            alt=""
          />
          <span className="fw-bold text-white">اکران آنلاین</span>
        </div>
        <div className="d-flex flex-column gap-4">
          <h6 className="text-white">{title}</h6>
          <p>کارگردان: {director}</p>
          <div className="d-flex flex-row gap-3">
            {genres?.map((elem) => {
              return (
                <span className="p-1 rounded-5" key={elem.id + 10}>
                  {elem.genre}
                </span>
              );
            })}
          </div>
        </div>
        <button className="btn btn-sm border border-1 p-2 rounded-3 fw-bold text-white position-absolute bottom-0 ">
          خرید بلیت
        </button>
      </div>
    </>
  );
};

export default Online_Cinema_Content;
