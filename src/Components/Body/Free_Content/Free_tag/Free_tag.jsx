import icon_play from "../../../../Images/icon-play.svg";
const Free_tag = () => {
  return (
    <>
    <div className="d-flex flex-row justify-content-center align-items-center gap-1 px-2 py-1 rounded-5 position-absolute" id="free_content_tag">
        <img className="img-fluid" src={icon_play} alt="" />
        <span className="fw-bold">رایگان</span>
    </div>
    </>
  )
}

export default Free_tag