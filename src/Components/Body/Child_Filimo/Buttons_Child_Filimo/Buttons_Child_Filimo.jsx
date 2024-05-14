import "./Buttons_Child_Filimo.css";
const Buttons_Child_Filimo = ({ buttons }) => {
  return (
    <>
      <div className=" d-flex flex-row gap-3 w-100" id="Buttons_Child_Filimo">
        {buttons?.map((elem) => {
          return (
            <button className="btn fw-bold text-black px-3 py-2" key={elem.id}>
              {elem.content}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Buttons_Child_Filimo;
