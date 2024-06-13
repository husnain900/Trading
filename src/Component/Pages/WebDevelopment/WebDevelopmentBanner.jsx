
import { IoCheckmarkCircle } from 'react-icons/io5';
function WebDevelopmentBanner() {
  return (
    <div className="Brand_Identity_bg">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-xs-6 p-0">
            <div className="sm-bg">
              <h2 className="Brand_Heading">WEB & APP</h2>
              <h2 className="Identity_Heading">Development</h2>
            </div>
            <div className="p-12">
              <div className="BrandIdentity_P">
                <p>
                  <IoCheckmarkCircle /> Seamless user experience
                </p>
                <p>
                  <IoCheckmarkCircle />Comprehensive competitors’ analysis
                </p>
                <p>
                  <IoCheckmarkCircle /> Experienced teams of quality assurance
                </p>
              </div>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  )
}

export default WebDevelopmentBanner