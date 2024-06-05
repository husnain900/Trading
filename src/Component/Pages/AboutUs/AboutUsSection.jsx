
const carouselData = [
  {
    src: "/images/carosal.png",
    label: "Our Essence",
    content: "At Athena Technology, we’re not just a team; we’re a family. We believe in creating an environment where everyone can thrive, innovate, and make a meaningful impact. Our culture is the backbone of our success, guiding us as we shape the future of financial technology.",
    interval: 10000
  },
  {
    src: "/images/carosal.png",
    label: "Innovation at Every Step ",
    content: "Creativity and Problem-Solving: Innovation is in our DNA. We encourage creative thinking and problem-solving to overcome challenges and deliver cutting-edge solutions. Continuous Improvement: We believe there’s always room for growth. Athena fosters a culture of continuous improvement, where learning and adapting are part of our everyday work.",
    interval: 2000
  },
  {
    src: "/images/carosal.png",
    label: "Integrity and Transparency ",
    content: "Ethical Standards: Integrity is at the core of all we do. We uphold the highest standards of professionalism and ethics in our work and interactions. Open Communication: Transparent communication forms the basis of our operations. We believe in open dialogues, where every voice is heard and valued.",
    interval: null // Default interval
  },
  {
    src: "/images/carosal.png",
    label: "Third slide label",
    content: "Some representative placeholder content for the third slide.",
    interval: null // Default interval
  }
];

function AboutUsSection() {
  return (
    <div className="container">
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
                  <div className="d-none d-md-block">
                    <h5>{item.label}</h5>
                    <p>{item.content}</p>
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
