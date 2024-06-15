
import "./tradingservices.css";

function MetaTraders() {


    return (
        <div className="container">
            <div className="MetaTraders-content mt-5 pt-lg-5 pt-1">
                <div className="row">
                    <div className="col-12 col-lg-10">
                        <h1 style={{ color: "#444444" }} className="section-title text-start" >
                            MetaTrader 4 & MetaTrader 5
                            Your Gateway to the Markets
                        </h1>
                        <h3 className="bluetitle my-4"> Chosen by Millions of Traders Worldwide.</h3>
                        <p className="section-text2">
                            Unlock the potential of the markets with MetaTrader. At Athena, we provide a straightforward, swift, and cost-effective brokerage startup package tailored for both emerging and growing brokerages eager to establish their own brand. Whether you’re just starting out or looking to expand, our MetaTrader solutions offer the perfect platform to connect with the global trading community.
                        </p>
                    </div>
                    <div className="col-12">
                        <div className="d-block d-md-none mt-4">
                            <p className="section-text2 text-black">Built-in social trading functions</p>
                            <p className="py-4 section-text2 text-black">Multi-language options in over 20 languages</p>
                            <p className="section-text2 text-black">Over 50 market analysis indicators</p>
                        </div>
                        <img className="w-100 h-auto" src="Assets/Images/2nd.png" alt="" />
                        <div className="d-block d-md-none">
                            <p className="section-text2 text-black">Mobile, web and desktop versions</p>
                            <p className="py-4 section-text2 text-black">Multi-currency account including cryptocurrencies</p>
                            <p className="section-text2 text-black">Create your own trading robot</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MetaTraders;
