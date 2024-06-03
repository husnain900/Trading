import BlueBannar from "../../Common/BlueBannar/BlueBannar"
import GrideTrading from "./GrideTrading";
import MetaTraders from "./MetaTraders";
import MobileSection from "./MobileSection";
import "./tradingservices.css"
const TradingServices = () => {
  const listItems = [
    "Fast and efficient",
    "Fully customizable",
    "Mobile, Web and Desktop"
  ];
  return (
    <div>
      <BlueBannar
        title="Trading Platform"
        imageSrc="Assets/Images/banner1.png"
        listItems={listItems}
        scrollImageSrc="Assets/Images/scroll.png"
      />
        <MetaTraders />
        <GrideTrading />
        <MobileSection />
    </div>

  )
}

export default TradingServices
