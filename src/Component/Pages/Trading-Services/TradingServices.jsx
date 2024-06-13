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
    "Fast and Efficient Trading Fully Customizable Platforms MetaTrader 4 & MetaTrader 5"
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
      <div className="left-content">
        <BlueBannar
          title={["Empower Your Trade, ", <br />, "Expand Your Horizons"]}
          imageSrc="Assets/Images/banner1.png"
          listItems={listItems}
          
          backgroundImage="Assets/Images/Background/image_2024_06_10T11_43_51_524Z.png"
          reverseOrder={true} // reversed order
        />
      </div>
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
