import ButtonC from "../../Ui-Component/Button"

const HomeBannar = () => {
    return (
        <div className="container">
            <div className="row align-items-center mb-5 ">
                <div className="col-12 col-md-6">
                    <img style={{ filter: 'grayscale(100%)' }} className="w-100 h-auto" src="Assets/Images/about.png" alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <div className="homebannarcontact">
                        <h1>Build Your Brand with Athena.</h1>
                        <h3 className="my-3 my-lg-4 bluetitle">Simple, Fast, and Cost-Efficient Trading for Forex, Stocks, Gold, and Cryptos.</h3>
                        <p>At Athena, we specialize in creating robust platforms for trading and brokerage companies. Utilizing our deep market knowledge and broad industry connections, we equip our clients with the tools they need to quickly and effectively establish a strong presence in the industry.</p>
                        <ButtonC text="Contact Us" to="/contact-us" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBannar
