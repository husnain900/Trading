import { Helmet } from "react-helmet";
import "./PaymentSolution.css";
import BlueBannar from "../../Common/BlueBannar/BlueBannar";
const PaymentSolution = () => {
    const listItems = [
        "Local bank payment  ",
        "Cryptocurrency pay   ",
        "Credit card payment   "
    ];
    return (
        <div>
            <Helmet>
                <title>
                    Payment Solution - fathena
                    :
                    fathena</title>
            </Helmet>
            <BlueBannar
                title="Payment Solution                "
                imageSrc="Assets/Images/payment-banner.png"
                listItems={listItems}
                scrollImageSrc="Assets/Images/scroll.png"
            />
        </div>
    )
}

export default PaymentSolution
