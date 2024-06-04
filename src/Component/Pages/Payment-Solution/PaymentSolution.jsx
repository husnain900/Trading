import { Helmet } from "react-helmet";
import "./PaymentSolution.css";
import BlueBannar from "../../Common/BlueBannar/BlueBannar";
import Seamless from "./Seamless";
import AcceptCard from "./AcceptCard";
import ItWorks from "./ItWorks";
import Security from "./Security";
import BannarBank from "./BannarBank";
import TradingForm from "../Trading-Services/TradingForm";
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
                title="Payment Solution"
                imageSrc="Assets/Images/payment-banner.png"
                listItems={listItems}
                scrollImageSrc="Assets/Images/scroll.png"
            />
            <Seamless />
            <AcceptCard />
            <ItWorks />
            <Security />
            <BannarBank />
            <TradingForm />
        </div>
    )
}

export default PaymentSolution
