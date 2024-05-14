import "./Section_heading.css"
const Section_heading = (props) => {
  return (
    <>
      <div className="my-2 order-2" id="heading_section_custom">
        <h1 className="text-white fw-bold">{props.heading.heading}</h1>
        <p className="text-white">{props.heading.description}</p>
      </div>
    </>
  );
};

export default Section_heading;
