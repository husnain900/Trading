import { IoCheckmarkCircle } from "react-icons/io5";

const Analysis = () => {


    const items = [
        "Use 80 + technical indicators and analytical objects",
        "Open 100 charts to monitor all markets",
        "Examine price movement in 21 timeframes"
    ];

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-12 col-md-10 col-lg-6">
                    <h1 className="section-title text-start p-0 text-larger" >
                        Technical Analysis Tools
                    </h1>
                    <h3 className="bluetitle text-start">The full collection of analytical tools to predict market movements.</h3>
                    <div className="check-p py-4">
                        {items.map((item, index) => (
                            <p className="align-items-center text-black d-flex gap-2" key={index}>
                                <IoCheckmarkCircle className="mb-1" style={{ color: "#5584FF" }} size={18} /> {item}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="col-12">
                    <img className="w-100 h-auto px-1 px-lg-5" src="Assets/Images/trade-tolls2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Analysis;
