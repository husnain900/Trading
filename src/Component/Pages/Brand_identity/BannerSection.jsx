import './BrandIdentity.css';

import { IoCheckmarkCircle } from 'react-icons/io5';

function BannerSection() {
  return (
    <div className="Brand_Identity_bg">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-xs-6 p-0">
            <div className="sm-bg">
              <h2 className="Brand_Heading">BRAND</h2>
              <h2 className="Identity_Heading">Identity</h2>
            </div>
            <div className="p-12">
              <div className="BrandIdentity_P">
                <p>
                  <IoCheckmarkCircle /> Stand out from the crowd
                </p>
                <p>
                  <IoCheckmarkCircle /> Communicate company’s personality
                </p>
                <p>
                  <IoCheckmarkCircle /> Comprehensive brand strategy planning
                </p>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
}

export default BannerSection;
