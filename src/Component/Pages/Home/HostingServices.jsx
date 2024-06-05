import ButtonC from "../../Ui-Component/Button"

const HostingServices = () => {
    return (
        <div className="container">
            <div className="hosting-services-content mb-5 text-center py-5">
                <h2 className="titleline">Trading Capabilities</h2>
                <h3 className="section-title">
                    Hosting service
                </h3>
                <img className="w-100 h-auto py-3 py-lg-5" src="Assets/Images/Home/2.png" alt="" />
                <p className="section-text">
                    Utilizing AWS and Equinix data centers, we provide low-latency connectivity directly to the financial ecosystem. This strategic placement near major liquidity providers for Forex, Stocks, Gold, and Cryptos allows us to reduce trade request times to less than a hundredth of a millisecond, enhancing execution speed and efficiency.
                </p>
                <ButtonC text="Learn More" to="/hosting-service" />
            </div>
        </div>
    )
}

export default HostingServices
