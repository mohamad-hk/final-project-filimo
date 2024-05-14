import "./Free_Content_item.css"
const Free_Content_item = ({ image, title }) => {
  return (
    <>
      <div className="d-flex flex-column align-items-start p-xxl-3" id="content_free_item">
        <img className="img-fluid rounded-3" src={image} alt="" />
        <p className="text-white fw-bold">{title}</p>
      </div>
    </>
  );
};

export default Free_Content_item;
