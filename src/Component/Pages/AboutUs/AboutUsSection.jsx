import './About.css';

const carouselData = [
  {
    src: "/images/carosal.png",
    label: "Our Essence",
    content: "At Athena Technology, we’re not just a team; we’re a family. We believe in creating an environment where everyone can thrive, innovate, and make a meaningful impact. Our culture is the backbone of our success, guiding us as we shape the future of financial technology.",
    interval: 10000
  },
  {
    src: "/images/carosal.png",
    label: "Innovation at Every Step",
    content: "<strong>Creativity and Problem-Solving:</strong> Innovation is in our DNA. We encourage creative thinking and problem-solving to overcome challenges and deliver cutting-edge solutions.",
    content2: "<strong>Continuous Improvement:</strong> We believe there’s always room for growth. Athena fosters a culture of continuous improvement, where learning and adapting are part of our everyday work.",
    interval: 2000
  },
  {
    src: "/images/carosal.png",
    label: "Integrity and Transparency",
    content: "<strong>Ethical Standards:</strong> Integrity is at the core of all we do. We uphold the highest standards of professionalism and ethics in our work and interactions.",
    content2: "<strong>Open Communication:</strong> Transparent communication forms the basis of our operations. We believe in open dialogues, where every voice is heard and valued.",
    interval: 1000 // Default interval
  },
  {
    src: "/images/carosal.png",
    label: "Diversity and Inclusion",
    content: "<strong>A Melting Pot of Talents:</strong> Athena is proud of its diverse workforce. We bring together people from various backgrounds, each adding unique value to our collective goals.",
    content2: "<strong>Inclusivity:</strong> We are committed to creating an inclusive environment where everyone feels respected, regardless of their background or identity.",
    interval: 500 // Default interval
  },
  {
    src: "/images/carosal.png",
    label: "Empowering Our People",
    content: "<strong>Professional Growth:</strong>  At Athena, career development is a priority. We provide opportunities for learning, mentorship, and advancement.",
    content2: "<strong>Recognition and Reward:</strong>We recognize and reward the hard work and achievements of our team members, celebrating individual and collective successes.",
    interval: null // Default interval
  },
  {
    src: "/images/carosal.png",
    label: "Social Responsibility",
    content: "<strong>Community Engagement:</strong>Athena is an active participant in community development. We encourage our employees to engage in volunteer work and support various local initiatives.",
    content2: "<strong>Environmental Stewardship:</strong>We are mindful of our environmental impact and strive to operate sustainably, contributing positively",
    interval: null // Default interval
  }
];

function AboutUsSection() {
  return (
    <div className="container">
      <div className='AboutUsLAstSectionText'> <h1>Company Culture</h1>
      <p>Innovation, Integrity, Inclusivity: The Pillars of Our Culture</p></div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide carousel-fade py-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {carouselData.map((item, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner py-5">
          {carouselData.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              data-bs-interval={item.interval}
            >
              <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center">
                  <img src={item.src} className="d-block" alt={`${item.label}`} />
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-md-block mt-5 mt-lg-0">
                    <h5 className='fw-bold'>{item.label}</h5>
                    <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                    {item.content2 && <p dangerouslySetInnerHTML={{ __html: item.content2 }}></p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
