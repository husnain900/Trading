import "./BlueBannar.css";

const BlueBannar = ({ title, listItems, backgroundImage, reverseOrder }) => {
  return (
    <div
      className="blue-bannar"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container-fluid">
        <div className={`row my-4 align-items-center ${reverseOrder ? 'flex-row-reverse' : ''}`}>
          <div className="col-12 col-lg-8">
            <div className="blue-banner-c-w">
              <h1>{title}</h1>
              <ul className="bannar-list mt-2 mt-lg-0 p-0">
                {listItems.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueBannar;
