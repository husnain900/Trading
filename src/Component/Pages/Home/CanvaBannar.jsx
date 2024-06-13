import { useState } from 'react';
import './CanvaBannar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CanvaBannar() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="container-fluid canvabanner-container">
      <div className="row">
        <div className="col-12 col-lg-8 media-wrapper p-0">
          <img
            src="/images/empowering future of trading.png"
            alt="Overlay"
            className={`overlay-image ${videoLoaded ? 'hidden' : ''}`}
          />
          <video
            autoPlay
            loop
            muted
            className={`canvabannervideo  ${videoLoaded ? '' : 'hidden'}`}
            onLoadedData={handleVideoLoaded}
          >
            <source src="/images/Home Hero Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-12 col-lg-4 p-lg-0 " id=''>
          <div className="d-flex align-items-center h-100">
            <div className="canvabanner-container text-center" id='canvabanner_text'>
              <h2>Simplifying Your Path</h2>
              <h5>Complete IT Solutions for Trading and Brokerage Firms</h5>
              <p>
                We simplify your financial operations from budgeting to branding, enabling you to work with ease and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanvaBannar;
