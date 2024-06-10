import { useState } from 'react';
import './About.css';
import AboutUsSection from './AboutUsSection';

function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const handleReadMore2 = () => {
    setIsExpanded2(!isExpanded2);
  };
  const handleReadMore3 = () => {
    setIsExpanded3(!isExpanded3);
  };

  return (
    <>
      {/* !st Section */}
      <div className="AboutUsImg">
        <div className="container">
          <div className="row">
            <div className="AboutUsbox " />
            <div className=" col-12 col-md-6 aboutus1stcontent">
              <h1>Pioneering the Future of Trading</h1>

              <p>
                Simple, Cost-Efficient, Fast—Crafting the Trading Experience
                Since 2019.
              </p>
              <p className="ReadMorebtn" onClick={handleReadMore}>
                {isExpanded ? 'Read Less About Us' : 'Read More About Us'}
              </p>
            </div>

            {isExpanded && (
              <div className="col-12 col-md-6  aboutus1stcontentAfter">
                <p>
                  Athena Technology, established in 2019, strives to
                  revolutionize the online trading experience by focusing on
                  simplicity, cost-efficiency, and speed. These principles guide
                  the development of each tool and service, aiming to provide
                  top-tier trading solutions. The company culture prioritizes
                  these values, fostering an environment that encourages
                  innovation and focuses on enhancing user experience. Athena
                  Technology is dedicated to continuous improvement, ensuring
                  their trading platforms are industry-leading and empowering
                  traders to maintain a competitive edge. Since its founding,
                  Athena has positioned itself as a pioneer in the trading
                  sector, continuously pushing the boundaries of what is
                  possible in online trading.
                </p>
              </div>
            )}
          </div>
        </div>{' '}
      </div>
      {/* 2nd Section */}
      <div className="container">
        <div className="row aboutus2ndcont">
          <div className={`col-12 col-md-6 ${isExpanded2 ? 'col-md-6' : ''} `}>
            <div className="AboutUsbox" />
            <div className="aboutus2ndcontent">
              <h1 style={{color:"#979797"}}>
                <b>Explore the Future of Trading</b>
              </h1>

              <p>
                Join our CEO, Edward HyungJin Jung, as he shares the
                transformative journey from Wall Street to the digital
                forefront. Learn how Athena&apos;s dedication to innovation and
                reliability is shaping the trading world.
              </p>

              <p className="ReadCeobtn" onClick={handleReadMore2}>
                {/* <b>
                  <u>{isExpanded2 ? 'Read Less' : "Read the CEO's Letter"}</u>{' '}
                </b>{' '} */}
              </p>
              <img
                style={{ width: '92%' }}
                src="/images/CEO.jpeg"
                alt="CEO image"
              ></img>
              <h5 style={{color:"#979797"}}>
                <br />
                <br/>
                <b>CEO Profile Overview:</b>
              </h5>
              <p>
              Edward HyungJin Jung, an NYU alum, transitioned from Wall Street to pioneering AI in trading with his creation of a "black box" system. This innovation led him to found Athena Technology in 2019, where he combines deep industry knowledge with advanced technology to enhance digital trading platforms.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6  aboutus2ndcontentAfter">
            <p>
              Dear Valued Partners,
            </p>
            <p>
              At Athena Technology, we harness a blend of diverse talents and
              innovative ideas. Our team, which boasts a wealth of industry
              expertise and a robust passion for pragmatic innovation, is the
              cornerstone of our mission. Their unwavering dedication and
              commitment are what propel us daily toward redefining the
              capabilities of a trading platform.
            </p>
            <p>
              Our approach is grounded in a simple philosophy: trading platforms
              should be accessible, affordable, and swift, enabling traders to
              execute their strategies effectively and without undue burden.
              This philosophy guides every decision we make and every feature we
              develop, ensuring that we remain leaders in the industry.
            </p>
            <p>
              As we continue to move forward, our dedication to driving
              innovation and setting new standards in trading technology remains
              unwavering. We are committed to maintaining the core values of
              simplicity, cost-efficiency, and speed in all our developments.
            </p>
            <p>
              I warmly invite you to join us on this ongoing journey, to be a
              part of the transformative changes that are shaping the future of
              trading. Together, we can redefine what it means to trade
              efficiently and effectively in the digital age.
            </p>
            <p>Best regards,</p>
            <br />
            <p>Edward HyungJin Jung</p>
            <p>Founder & CEO, Athena Technology</p>

           
         <br/>
            <h5 style={{color:"#979797"}}>
              <b>Educational & Career Milestones:</b>
            </h5>

            <p>1999: Stockbroker at Merrill Lynch.<br/>
2000: Currency Trader at Citi Group New York.<br/>
2005: Principal Manager at Nara New York Wealth Management.<br/>
2010: Principal Partner of FSICM New York Hedge Fund.<br/>
2019: Founder and CEO of Athena Technology,</p>
       
          </div>
        </div>
      </div>

      {/* 3rd Section */}
      <div className="AboutUsImg2 mb-5">
      <div className="container">
        <div className="row aboutus2ndcont">
          <div className=
          {`col-12 col-md-6 ${isExpanded3 ? 'col-md-6' : ''} `}>
            <div className="AboutUsbox" />
            <div className="col-12 col-md-6 aboutus3rdcontent" >
              <h1 ><b>Our Dynamic Team</b></h1>

              <h5>
              At the heart of Athena's success is its team. A vibrant mix of seasoned IT and financial professionals along with fresh, young talent in both fields ensures a balanced approach to our mission. This blend of experience and fresh perspectives makes us agile, innovative, and always ready to adapt to the evolving needs of the trading world.
               <br/> <span className="ReadCeobtn" onClick={handleReadMore3}>
                  <b>{isExpanded3 ? ' [Read Less]' : ' [Read More]'}</b>{' '}
                </span>
              </h5>

              {/* <img
                style={{ width: '100%' }}
                src="/images/team.jpg"
                alt="Team image"
              ></img> */}
            </div>
          </div>
          {isExpanded3 && (
            <div className="col-12 col-md-6    aboutus23rdcontentAfter">
              <h5>
                <b>Diversity in Expertise</b>
              </h5>
              <p>
                <b>• Global Talent Pool:</b> Our team members hail from all
                corners of the globe, bringing a wealth of diverse perspectives
                and ideas.
              </p>
              <p>
                <b>• Multidisciplinary Professionals:</b> From seasoned
                developers to creative marketers, our team comprises experts
                across various fields, all united by a common goal.
              </p>
              <h5>
                <b>Leadership and Vision</b>
              </h5>
              <p>
                <b>• Experienced Leadership:</b> Guided by a leadership team
                with years of industry experience, we navigate the complexities
                of the fintech world with confidence and foresight.
              </p>
              <p>
                <b>• Collaborative Environment:</b> Our leaders are approachable
                and collaborative, fostering a culture of open communication and
                shared vision.{' '}
              </p>
              <h5>
                <b>Innovation and Creativity</b>
              </h5>
              <p>
                <b>• Creative Freedom:</b>We encourage our team members to think
                creatively, explore new ideas, and challenge the status quo.
              </p>
              <p>
                <b>• Problem Solvers:</b> Innovation isn’t just about
                technology; it’s about finding solutions to complex challenges.
                Our team excels in this arena.
              </p>
              <h5>
                <b>Growth and Development</b>
              </h5>
              <p>
                <b>• Learning Culture:</b> We invest in the continuous
                development of our team, offering training and opportunities to
                advance their skills.
              </p>
              <p>
                <b>• Career Advancement:</b> At Athena, career progression is
                not just a possibility; it’s a priority. We support our team
                members in their professional journeys.
              </p>
              <h5>
                <b>Team Spirit</b>
              </h5>
              <p>
                <b>• Collaborative Projects: </b> Working on projects
                collaboratively, we leverage each other’s strengths and learn
                from different viewpoints.
              </p>
              <p>
                <b>• Team Building:</b> Regular team-building activities and
                social events foster a sense of camaraderie and unity.
              </p>
            </div>
          )}
        </div>
      </div></div>

      {/* 4th Section */}
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-6 AboutUsSecttion4Content">
            <h1>Trading, Transformed</h1>
            <h3>Swift, Smart, Superior with Athena.</h3>
            <p>
              <b>Mission:</b> To redefine the trading experience by offering a
              next-generation platform that’s not just swift and user-friendly,
              but also enhanced with the intelligence of AI, ensuring optimized
              trading outcomes.
            </p>
            <p>
              <b>Vision:</b> We envision a world where trading systems are not
              only reliable but also continuously advancing with technology. Our
              dream is to be the first choice for traders globally, providing
              them with a platform that’s ahead of its time.
            </p>
            
          </div>
          <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'> <img
              style={{ width: '80%' }}
              src="/images/aboutus4.png"
              alt="Team image"
            ></img></div>
        </div>
      </div>
      {/* 5th Section Last */}

     
      <AboutUsSection />
    </>
  );
}

export default About;
