import ButtonC from "../../Ui-Component/Button"

const TradingServices = () => {
    return (
        <div className="container">
            <div className="trading-services-content mb-5 text-center py-lg-5 py-4">
                <h2 className="section-title ">Trading Platform
                </h2>
                <img className="w-100 h-auto py-3 py-lg-5" src="Assets/Images/Home/3.png" alt="" />
                <p className="section-text">
                    Athena provides rapid and user-friendly trading platforms for a diverse range of financial markets, including Forex, Stocks, Gold, and Cryptos. Our offerings include a variety of trading and reporting APIs, customizable to meet the specific requirements of your online trading services.
                </p>
                <ButtonC text="Learn More" to="/trading-platform" />
            </div>
        </div>
    )
}

export default TradingServices
