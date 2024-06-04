import { Helmet } from "react-helmet";
import BlueBannar from "../../Common/BlueBannar/BlueBannar";
import MajorCards from "./MajorCards";
import Liquidity from "./Liquidity";
import Gateway from "./Gateway";
import Aggregation from "./Aggregation";
import Infrastructure from "./Infrastructure";

const AggregatedLiquidity = () => {
    const listItems = [
        "Customized liquidity pools",
        "Competitive quote aggregation ",
        "Multi-tiered bid/offer "

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
                title="Aggregated Liquidity"
                imageSrc="Assets/Images/aggregated.png"
                listItems={listItems}
                scrollImageSrc="Assets/Images/scroll.png"
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
