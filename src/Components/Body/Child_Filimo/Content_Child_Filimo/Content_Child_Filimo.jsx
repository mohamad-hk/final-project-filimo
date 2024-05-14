import "./Content_Child_Filimo.css"
const Content_Child_Filimo = ({content}) => {
  return (
    <>
      <div>
        <h1 className="text-white mb-3">{content[0]}</h1>
        <p >{content[1]}</p>
      </div>
    </>
  );
};

export default Content_Child_Filimo;
