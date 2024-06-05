import ButtonC from "../../Ui-Component/Button"




const PaymentServices = () => {
    return (
        <div className="container">
            <div className="payment-services-content mb-5 py-5 text-center">
                <h2 className="section-title">Payment Solution</h2>
                <img className="w-100 h-auto py-3 py-lg-5" src="Assets/Images/Home/4.png" alt="" />
                <p className="section-text"> We facilitate worldwide payment acceptance by integrating traditional banking methods with blockchain solutions. Our approach combines local and international bank and credit card payments with blockchain technologies, allowing you to manage transactions effortlessly.  </p>
                <ButtonC text="Learn More" to="/learn-more" />
            </div>
        </div>
    )
}

export default PaymentServices
