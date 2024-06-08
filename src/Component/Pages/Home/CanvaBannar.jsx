import  { useState } from 'react';
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
        <div className="col-12 col-md-8 col-lg-9 media-wrapper">
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
        <div className="col-12 col-md-4 col-lg-3 canvabanner-container " id='canvabanner_text'>
          <h2>Simplifying Your Path</h2>
          <h5>Streamlined, Speedy, Cost-Effective Solutions</h5>
          <p>
            Our mission is to support your trading from start to finish by handling aspects
            like server hosting, payment processing, and web development. We aim to simplify
            your financial activities, assisting in everything from budgeting to branding,
            ensuring you operate with ease and confidence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CanvaBannar;
