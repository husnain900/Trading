import '../Brand_identity/BrandIdentity.css';

import { IoCheckmarkCircle } from 'react-icons/io5';
function WebDesignBanner() {
  return (
    <div className="Brand_Identity_bg">
    <div className="container">
      <div className="row ">
        <div className="col-12 col-xs-6">
          <h2 className="Brand_Heading">WEB</h2>
          <h2 className="Identity_Heading">Design</h2>
          <div className="BrandIdentity_P">
            <p>
              <IoCheckmarkCircle /> Build your digital presence
            </p>
            <p>
              <IoCheckmarkCircle /> Engage potential customers
            </p>
            <p>
              <IoCheckmarkCircle />Convey trust and legitimacy
            </p>
            <p>
              <IoCheckmarkCircle />Create mobile responsive designs
            </p>
          </div>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  </div>
  )
}

export default WebDesignBanner;