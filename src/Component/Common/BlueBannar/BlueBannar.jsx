import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "./BlueBannar.css";

const BlueBannar = ({ title, imageSrc, listItems, paragraphText, scrollImageSrc }) => {
  return (
    <div className="blue-bannar">
      <div className="container">
        <h1>{title}</h1>
        <div className="row my-5 align-items-center">
          <div className="col-12 col-md-6">
            <img className="w-100 h-auto" src={imageSrc} alt="" />
          </div>
          <div className="col-12 col-md-6">
            <ul className="bannar-list mt-5 mt-lg-0 p-0">
              {listItems.map((item, index) => (
                <li key={index}><IoCheckmarkCircleOutline />{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p>{paragraphText}</p>
          <img className="mt-5" src={scrollImageSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlueBannar;
