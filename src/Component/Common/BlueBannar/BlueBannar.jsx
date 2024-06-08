

import "./BlueBannar.css";

const BlueBannar = ({ title, imageSrc, listItems, paragraphText, scrollImageSrc, backgroundImage }) => {
  return (
    <div
      className="blue-bannar"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
       
        <div className="row my-4 align-items-center">
          <div className="col-12 col-md-6 BlueBannar">
          <h1 > {title}</h1>
          <ul className="bannar-list mt-5 mt-lg-0 p-0">
              {listItems.map((item, index) => (
                <li  key={index}>
                
                  {item}
                </li>
              ))}
            </ul>
            {/* <img className="w-100 h-auto" src={imageSrc} alt="" /> */}
          </div>
          <div className="col-12 col-md-6">
           
          </div>
        </div>
        <div className="text-center">
          {/* <p>{paragraphText}</p> */}
          <img className="mt-3" src={scrollImageSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlueBannar;
