import "./BlueBannar.css";

const BlueBannar = ({ title, listItems, scrollImageSrc, backgroundImage, reverseOrder }) => {
  return (
    <div
      className="blue-bannar"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container text-start text-lg-center">
        <div className={`row my-4 align-items-center ${reverseOrder ? 'flex-row-reverse' : ''}`}>
        <div className="col-12 col-lg-2 d-none d-lg-block">
        </div>
          <div className="col-12 col-md-12 col-lg-8">
            <h1>{title}</h1>
            <ul className="bannar-list mt-2 mt-lg-0 p-0">
              {listItems.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-2 d-none d-lg-block">
          </div>
        </div>
        <div className="text-center">
          <img className="mt-3" src={scrollImageSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlueBannar;
