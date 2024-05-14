import Accordion from "react-bootstrap/Accordion";
import "./FAQ_content.css"
const FAQ_content = ({id,title,content}) => {
  return (
    <>
      <Accordion.Item eventKey={id} className="Accordion_item_custom mt-2 rouned">
        <Accordion.Header className="Accordion_item_custom_body">{title}</Accordion.Header>
        <Accordion.Body className="">{content}</Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default FAQ_content;
