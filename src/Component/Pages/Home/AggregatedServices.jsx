import ButtonC from "../../Ui-Component/Button"

const AggregatedServices = () => {
    return (
        <div className="container">
            <div className="aggregated-services-content">
                <h2 className="section-title">Aggregated Liquidity</h2>
                <img className="w-100 h-auto" src="Assets/Images/Home/5.png" alt="" />
                <p className="section-text">Our liquidity solution leverages an aggregated market depth from various providers through a lightweight gateway, including Metaquotes. This setup ensures low-latency trade execution within the AWS and Equinix global ecosystems, optimizing performance and reliability for traders in Forex, Stocks, Gold, and Cryptos. </p>
                <ButtonC text="Learn More" to="/learn-more" />
            </div>
        </div>
    )
}

export default AggregatedServices

