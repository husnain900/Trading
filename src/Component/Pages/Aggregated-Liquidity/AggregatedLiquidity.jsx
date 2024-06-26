import { Helmet } from "react-helmet";
import BlueBannar from "../../Common/BlueBannar/blueBannarCenter";
import MajorCards from "./MajorCards";
import Liquidity from "./Liquidity";
import Gateway from "./Gateway";
import Aggregation from "./Aggregation";
import Infrastructure from "./Infrastructure";
import "./AggregatedLiquidity.css";

const AggregatedLiquidity = () => {
    const listItems = [
        "Customized Liquidity Pools | Competitive Quote Aggregation | Multi-Tiered Bid/Offer System | Liquidity Management | Enhancing Transaction Efficiency"

    ];
    return (
        <div>
            <Helmet>
                <title>
                    Aggregated Liquidity - fathena
                    :
                    fathena
                </title>
            </Helmet>
            <BlueBannar
                title={[<b>Precision Liquidity,</b>, <br />, "Optimized Outcomes"]}
                imageSrc="Assets/Images/aggregated.png"
                listItems={listItems}
                backgroundImage="Assets/Images/Background/AggregatedLiquidity-Main-min.jpg"
            />
            <Liquidity />
            <MajorCards />
            <Infrastructure />
            <Aggregation />
            <Gateway />
        </div>
    )
}

export default AggregatedLiquidity
