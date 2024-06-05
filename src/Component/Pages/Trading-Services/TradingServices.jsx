import { Helmet } from "react-helmet";
import BlueBannar from "../../Common/BlueBannar/BlueBannar"
import GrideTrading from "./GrideTrading";
import MetaTraders from "./MetaTraders";
import MobileSection from "./MobileSection";
import Investment from "./Investment";
import "./tradingservices.css"
import Analysis from "./Analysis";
import MetaTraderAPI from "./MetaTraderAPI";
import TradingForm from "./TradingForm";
const TradingServices = () => {
  const listItems = [
    "Fast and Efficient Trading ",
    "Fully Customizable Platforms ",
    "Accessible Anywhere",
    "MetaTrader 4 & MetaTrader 5 ",
    "Your Gateway to the Markets"
  ];
  return (
    <div>
      <Helmet>
        <title>
          Trading Platform - fathena
          :
          fathena
        </title>
      </Helmet>
      <BlueBannar
        title="Empower Your Trade, Expand Your Horizons"
        imageSrc="Assets/Images/banner1.png"
        listItems={listItems}
        scrollImageSrc="Assets/Images/scroll.png"
        backgroundImage="../../../../public/Assets/Images/Background/TradingPlatform-Main.png"
      />
      <MetaTraders />
      <GrideTrading />
      <MobileSection />
      <Investment />
      <Analysis />
      <MetaTraderAPI />
      <TradingForm />

    </div>

  )
}

export default TradingServices
