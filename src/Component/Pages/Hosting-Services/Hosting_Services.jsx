import { Helmet } from "react-helmet";
import BlueBannar from "../../Common/BlueBannar/BlueBannar"
import Equinix from "./Equinix";
import Equinix2 from "./Equinix2";
import Equinix3 from "./Equinix3";
import Equinix4 from "./Equinix4";
import "./Hosting-Services.css"
import OurData from "./OurData";
const Hosting_Services = () => {
    const listItems = [
        '100% Uptime SLA',
        '99.9999% Data Center Uptime',
        'Free Server Migration',
        'Free DDoS Protection',
        'Optimized for Brokers'
    ];
    return (
        <div>
            <Helmet>
                <title>
                    Hosting Service - fathena
                    :
                    fathena
                </title>
            </Helmet>
            <BlueBannar
                title="Athena Hosting: Secure, Reliable, Always On"
                imageSrc="Assets/Images/host-banner.png"
                listItems={listItems}
                paragraphText="Athena server hosting service helps brokers to expand their operations without the logistical headaches of managing their own infrastructure ensuring both primary and backup sites are well equipped with a stable connection with low latency trade execution."
                scrollImageSrc="Assets/Images/scroll.png"
                backgroundImage="Assets/Images/Background/HostingService-Main-min.jpg"
            />
            <OurData />
            <Equinix />
            <div className="hosting-bg-2">
                <Equinix2 />
                <Equinix3 />
            </div>
            <Equinix4 />
        </div>
    )
}

export default Hosting_Services
