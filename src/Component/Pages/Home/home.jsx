import { Helmet } from "react-helmet";
import "./home.css";
import HomeBannar from "./HomeBannar";
import HostingServices from "./HostingServices";
import TradingServices from "./TradingServices";
import PaymentServices from "./PaymentServices";
import AggregatedServices from "./AggregatedServices";
import BrandIdentity from "./BrandIdentity";
import CanvasComponent from "./CanvaBannar";
const home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - fathena : fathena</title>
            </Helmet>
            <CanvasComponent />
            <HomeBannar />
            <HostingServices />
            <TradingServices />
            <PaymentServices />
            <AggregatedServices />
            <BrandIdentity />
        </div>
    )
}

export default home
