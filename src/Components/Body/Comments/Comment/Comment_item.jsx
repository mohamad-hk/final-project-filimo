import virgool from "../../../../Images/virgol.webp";
import profile_icon from "../../../../Images/profile_comment.webp";
const Comment_item = ({ user, Comment }) => {
  return (
    <>
      <div className="d-flex flex-column w-100">
        <div
          className="d-flex flex-row justify-content-center align-items-center position-relative mb-3"
          id="comment_content"
        >
          <div className="ms-2" id="first_icon">
            <img className="img-fluid" src={profile_icon} alt="" />
          </div>
          <h5 className="text-end ms-auto mt-2">{user}</h5>
          <div className="align-self-start" id="second_icon">
            <img className="img-fluid" src={virgool} alt="" />
          </div>
        </div>
        <p className="text-white fw-bold">{Comment}</p>
      </div>
    </>
  );
};

export default Comment_item;
