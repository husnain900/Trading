import { useState } from 'react';
import './About.css';
// import AboutUsSection from './AboutUsSection';

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
      <div className={`${isExpanded ? 'container' : 'container-fluid'}`}>
        <div className="row">
     

          <div
            className={`col-12 ${
              isExpanded ? 'col-md-6' : ''
            } text-center AboutUsImg`}
          >
            <div className="AboutUsbox" />
            <div className="aboutus1stcontent">
              <h1>Pioneering the Future of Trading</h1>

              <p>
                Simple, Cost-Efficient, Fast—Crafting the Trading Experience
                Since 2019.
              </p>
              <p className="ReadMorebtn" onClick={handleReadMore}>
                {isExpanded ? 'Read Less About Us' : 'Read More About Us'}
              </p>
            </div>
          </div>
          {isExpanded && (
            <div className="col-12 col-md-6  aboutus1stcontentAfter">
              <h2>Athena Technology</h2>
              <p>
                Established in 2019, Athena Technology has consistently aimed to
                redefine the online trading experience. Our guiding principle is
                clear and focused: to make trading simple, cost-efficient, and
                fast for everyone. This commitment shapes every tool and service
                we develop, ensuring our users have access to the best trading
                solutions in the industry.
              </p>
              <h5>Our Vision and Mission</h5>
              <p>
                Our mission at Athena Technology is straightforward—to
                streamline the trading process using innovative technology that
                guarantees speed, reduces costs, and simplifies user experience.
                We believe in making high-quality trading accessible to all,
                supporting our users in navigating the complexities of financial
                markets with ease and efficiency.
              </p>
              <h5>Core Values and Culture</h5>
              <p>
                Simplicity, affordability, and speed are at the heart of
                everything we do at Athena Technology. Our culture is built
                around these values, encouraging a workplace where innovation
                thrives and the focus remains on enhancing user experience. By
                harmonizing seasoned expertise with fresh perspectives, we
                create a collaborative environment that propels forward-thinking
                solutions.
              </p>
              <h5>Commitment to Excellence</h5>
              <p>
                Athena Technology is committed to excellence, focusing on the
                continuous improvement of our trading platforms to meet and
                exceed industry standards. Our dedication extends beyond
                technology; it encompasses a holistic approach to empower
                traders, instilling confidence and ensuring they always have a
                competitive advantage in the market.
              </p>
              <h5>Legacy and Future Outlook</h5>
              <p>
                Since our inception, Athena Technology has been more than a
                technology provider—we are pioneers in the trading industry. Our
                approach is rooted in a deep understanding of market dynamics
                and an unyielding drive to innovate. Looking forward, we remain
                dedicated to advancing our platforms and services, pushing the
                boundaries of what is possible in online trading.
              </p>
            </div>
          )}
        </div>
      </div>
      {/* 2nd Section */}
      <div className="container">
        <div className="row aboutus2ndcont">
          <div className={`col-12 col-md-6 ${isExpanded2 ? 'col-md-6' : ''} `}>
            <div className="AboutUsbox" />
            <div className="aboutus2ndcontent">
              <h1>Explore the Future of Trading with Athena Technology</h1>

              <p>
                Join our CEO, Edward HyungJin Jung, as he shares the
                transformative journey from Wall Street to the digital
                forefront. Learn how Athena’s dedication to innovation and
                reliability is shaping the trading world.
              </p>
              <p>
                <b>CEO Profile Overview:</b>
              </p>
              <p>
                Edward HyungJin Jung’s journey from Wall Street to pioneering AI
                trading systems highlights his impressive career path. An NYU
                alum, Edward swiftly moved into the realms of stocks and
                currency trading, showcasing his ambition and expertise. His
                development of a “black box” AI system, central to his hedge
                fund management strategy, led to the founding of Athena
                Technology in 2019. Under his leadership, Athena merges deep
                industry knowledge with advanced technology, emphasizing that
                the human touch enhances the precision of digital trading
                platforms.
              </p>
              <p>
                <b>Educational & Career Milestones:</b>
              </p>
              <p>
                <b>1999:</b> Graduated from New York University.
              </p>
              <p>
                <b>1999:</b> Began his professional journey at Merrill Lynch as
                a Currency Dealer
              </p>
              <p>
                <b>2005:</b> Held a role as the Principal Manager at Nara New
                York Wealth Management.
              </p>
              <p>
                <b>2010:</b> Ventured into hedge fund management as the
                Principle and CEO of FSICM in New York.
              </p>
              <p>
                <b>2019:</b>Founder and CEO of Athena Technology,
              </p>

              <p className="ReadCeobtn" onClick={handleReadMore2}>
                <b>
                  <u>{isExpanded2 ? 'Read Less' : "Read the CEO's Letter"}</u>{' '}
                </b>{' '}
              </p>
              <img
                style={{ width: '100%' }}
                src="/images/CEO.jpeg"
                alt="CEO image"
              ></img>
            </div>
          </div>
          {isExpanded2 && (
            <div className="col-12 col-md-6  aboutus2ndcontentAfter">
              <p>
                <b>Dear Valued Partners,</b>
              </p>
              <p>
                Reflecting on my start in 1999 on Wall Street, the evolution of
                the trading industry has been a dynamic journey, from the
                dot-com era to the rise of digital trading platforms. Amidst
                these changes, the constant has been the trader’s search for
                platforms that are functional, reliable, and innovative.
              </p>
              <p>
                This realization spurred the creation of Athena Technology. We
                set out not just to participate in the trading ecosystem but to
                lead it, crafting a trading experience that is intuitive,
                advanced, and dependable.
              </p>
              <p>
                Athena represents a fusion of diverse talents and ideas,
                blending deep industry knowledge with fresh, innovative
                perspectives. Our team, driven by expertise and passion, is the
                cornerstone of Athena, pushing us daily towards our mission of
                redefining trading.
              </p>
              <p>
                As we progress, our commitment remains strong: to innovate and
                set standards. I invite you to join us in this continuing
                journey, to be part of the change that shapes the future of
                trading.
              </p>
              <p>Best regards,</p>
              <h5>Edward HyungJin Jung</h5>
              <p>Founder & CEO, Athena Technology</p>
            </div>
          )}
        </div>
      </div>

      {/* 3rd Section */}

      <div className="container">
        <div className="row aboutus2ndcont">
          <div className={`col-12 col-md-6 ${isExpanded3 ? 'col-md-6' : ''} `}>
            <div className="AboutUsbox" />
            <div className="aboutus2ndcontent">
              <h1>Our Dynamic Team</h1>

              <p>
                At the heart of Athena’s success is its team. A vibrant mix of
                seasoned IT and financial professionals along with fresh, young
                talent in both fields ensures a balanced approach to our
                mission. This blend of experience and fresh perspectives makes
                us agile, innovative, and always ready to adapt to the evolving
                needs of the trading world.
                <span className="ReadCeobtn" onClick={handleReadMore3}>
                  <b>{isExpanded3 ? ' Read Less' : ' Read More'}</b>{' '}
                </span>
              </p>

              <img
                style={{ width: '100%' }}
                src="/images/team.jpg"
                alt="Team image"
              ></img>
            </div>
          </div>
          {isExpanded3 && (
            <div className="col-12 col-md-6  aboutus2ndcontentAfter">
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
      </div>

      {/* 4th Section */}
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
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
            <img
              style={{ width: '100%' }}
              src="/images/aboutus4.png"
              alt="Team image"
            ></img>
          </div>
        </div>
      </div>

      {/* 5th Section Last */}
      {/* <div className="container">
        <div className="row">
          <div className="col-12 AboutusEnvironmentSection">
            <h1>Environmental protection:</h1>
            <p>At Quadcode, we strive to reduce our ecological footprint and balance human and environmental needs by minimizing the use of resources, energy, and waste at the workplace.</p>
          </div>
          <div className='col-6'> <img src='/images/'></img></div>
          <div className='col-6'>text here</div>
        </div>
      </div> */}





      {/* jdcjhbsjdhcbs */}

      {/* <AboutUsSection/> */}
    </>
  );
}

export default About;
