import { IoIosCheckmark } from "react-icons/io";
import "./Advertise_content.css";
const Advertise_content = ({ content }) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-md-row mt-5 gap-5 justify-content-center align-items-center"
        id="advertise_content"
      >
        {content?.map((elem) => {
          return (
            <div
              className="d-flex flex-row align-items-center justify-content-center gap-2"
              key={elem.id}
            >
              <IoIosCheckmark
                style={{
                  color: "green",
                  fontSize: "20px",
                  backgroundColor: "rgba(28,181,97,.24)",
                  borderRadius: "20px",
                }}
              />
              <p className="fw-bold mt-2">{elem.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Advertise_content;
