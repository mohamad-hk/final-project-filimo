import "./Section_content.css";
const Section_content = (props) => {
  return (
    <>
      {props.content?.map((elem) => {
        return (
          <div className="d-flex flex-row gap-1 mt-3 " key={elem.id}>
            <div className="">
              <img className="img-fluid icon_content " src={elem.icon} alt="" />
            </div>
            <div className="">
              <p className="title_custom fw-bold"> {elem.title}</p>
              <p className="description_custom w-100">{elem.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Section_content;
