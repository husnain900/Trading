
const cardData = [
  {
    imgSrc: "Assets/Images/mobile.png",
    title: "Manager API",
    description: "For development of additional functions and platform integration"
  },
  {
    imgSrc: "Assets/Images/db.png",
    title: "DataFeed API    ",
    description: "For developing and publishing news and quote data feeds    "
  },
  {
    imgSrc: "Assets/Images/report.png",
    title: "Report API    ",
    description: "For creating customized reports on operations and traders    "
  },
  {
    imgSrc: "Assets/Images/web.png",
    title: "WebServices API    ",
    description: "For integration of the platform with websites    "
  },
];

const MetaTraderAPI = () => {

  return (
    <div className="container py-2 py-lg-5 my-5">
      <div className="row ">
        <div className="col-12 col-md-10 col-lg-6">
          <h1 className="section-title text-start text-larger" >
            MetaTrader API
          </h1>
          <h3 className="bluetitle text-start">Athena offers public interfaces (Application Programming Interface, API) to add, integrate and customize.</h3>
        </div>
      </div>
      <div className="row">
        {cardData.map((card, index) => (
          <div key={index} className="col-12 col-md-6 my-4">
            <div style={{ background: "#F3F5F8" }} className="card border-0 rounded-0 p-4 p-lg-5 w-100 h-100">
              <div className="img-h">
                <img className="card-img" src={card.imgSrc} alt={card.title} />
              </div>
              <h3 className="section-title text-start my-4 p-0">{card.title}</h3>
              <h4>{card.description}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetaTraderAPI;
