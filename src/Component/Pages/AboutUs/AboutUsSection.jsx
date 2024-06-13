import './About.css';
const sections = [
  {
    title: 'Innovation at Every Step',
    items: [
      ' Creativity and Problem-Solving: Innovation is in our DNA. We encourage creative thinking and problem-solving to overcome challenges and deliver cutting-edge solutions.',
      ' Continuous Improvement: We believe there’s always room for growth. Athena fosters a culture of continuous improvement, where learning and adapting are part of our everyday work.'
    ]
  },
  {
    title: 'Integrity and Transparency',
    items: [
      ' Ethical Standards: Integrity is at the core of all we do. We uphold the highest standards of professionalism and ethics in our work and interactions.',
      ' Open Communication: Transparent communication forms the basis of our operations. We believe in open dialogues, where every voice is heard and valued.'
    ]
  },
  {
    title: 'Diversity and Inclusion',
    items: [
      ' A Melting Pot of Talents: Athena is proud of its diverse workforce. We bring together people from various backgrounds, each adding unique value to our collective goals.',
      ' Inclusivity: We are committed to creating an inclusive environment where everyone feels respected, regardless of their background or identity'
    ]
  },
  {
    title: 'Empowering Our People',
    items: [
      ' Professional Growth: At Athena, career development is a priority. We provide opportunities for learning, mentorship, and advancement.',
      ' Recognition and Reward: We recognize and reward the hard work and achievements of our team members, celebrating individual and collective successes.'
    ]
  }
];

const carouselData = [
  {
    src: "Assets/Images/carousel/A 1.jpg",

  },
  {
    src: "Assets/Images/carousel/A 2.jpg",

  },
  {
    src: "Assets/Images/carousel/A 3.jpg",

  },
  {
    src: "Assets/Images/carousel/Untitled design.png",

  },


];

function AboutUsSection() {
  return (
    <div className="container">
      <div className='AboutUsLAstSectionText'> <h1>Company Culture</h1>
        <p>Innovation, Integrity, Inclusivity: The Pillars of Our Culture</p></div>
      <div className="row py-5">
        <div className="col-12 col-lg-6">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide  py-5"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators border-1 rounded-3 border-secondary p-3">
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
                    <div className="col-12 text-center">
                      <img src={item.src} className="d-block" alt={`${item.label}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
        {sections.map((section, index) => (
  <div key={index}>
    <h5 className='fw-bold SectionTitleLastAbout4'>{section.title}</h5>
    <ol className='custom-list AboutSectionListp'>
      {section.items.map((item, itemIndex) => (
        <li key={itemIndex}>{item}</li>
      ))}
    </ol>
  </div>
))}


        </div>
      </div>
    </div>
  );
}

export default AboutUsSection;
