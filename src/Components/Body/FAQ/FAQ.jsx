import Accordion from "react-bootstrap/Accordion";
import FAQ_content from "./FAQ_content/FAQ_content";
import FAQ_heading from "./FAQ_heading/FAQ_heading";
import "./FAQ.css"
const FAQ = ({ FAQ }) => {
  return (
    <>
      <div className="container-fluid" id="FAQ">
        <div className="row">
          <div className="col-10 col-md-8 col-lg-7 mx-auto mb-5">
            <FAQ_heading/>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              {FAQ?.map((elem) => {
                return (
                  <FAQ_content
                    id={elem.id}
                    title={elem.title}
                    content={elem.content}
                    key={elem.id}
                  />
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
