import { useState } from "react";
import "./About.css"; 

function About() { 
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
      setIsExpanded(true);
    };

    return (
      <div className="container">
        <div className="row">
          <div className={`col-12 ${isExpanded ? 'col-md-6 col-12' : ''} text-center bg-image-container`}>
            <div className="bg-image" />
            <div className="content">
              <h1>Initial Text</h1>
              {!isExpanded && (
                <button className="btn btn-primary" onClick={handleReadMore}>
                  Read More
                </button>
              )}
            </div>
          </div>
          {isExpanded && (
            <div className="col-12 col-md-6 text-center new-content">
              <h1>New Content</h1>
              <p>This is the additional content that appears when you click "Read More".</p>
            </div>
          )}
        </div>
      </div>
    );
}

export default About; // Corrected export statement
