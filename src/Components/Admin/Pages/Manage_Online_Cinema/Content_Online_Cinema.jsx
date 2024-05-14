const Content_Online_Cinema = ({ title, director, genres }) => {
  return (
    <>
      <div className="d-flex flex-column p-0 me-2" id="content_online_cinema">
        <h6 className="">{title}</h6>
        <p>کارگردان: {director}</p>
        <div className="d-flex flex-row gap-3">
          {genres?.map((elem) => {
            return (
              <span className="p-1 rounded-5 text-center" key={elem.id}>
                {elem.genre}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content_Online_Cinema;
