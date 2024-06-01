import BlueBannar from "../../Common/BlueBannar/BlueBannar"
import "./Hosting-Services.css"
import OurData from "./OurData";
const Hosting_Services = () => {
    const listItems = [
        '100% Uptime SLA',
        '99.9999% Data Center Uptime',
        'Free Server Migration',
        'Free DDoS Protection'
    ];
    return (
        <div>
            <BlueBannar
                title="Athena Hosting Service"
                imageSrc="Assets/Images/host-banner.png"
                listItems={listItems}
                paragraphText="Athena server hosting service helps brokers to expand their operations without the logistical headaches of managing their own infrastructure ensuring both primary and backup sites are well equipped with a stable connection with low latency trade execution."
                scrollImageSrc="Assets/Images/scroll.png"
            />
            <OurData />
        </div>
    )
}

export default Hosting_Services
