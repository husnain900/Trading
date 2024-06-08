import { IoCheckmarkCircle } from "react-icons/io5";
import ButtonC from "../../Ui-Component/Button"

function BrandIdentity() {
    const items = [
        'Stand out from the crowd',
        'Communicate company’s personality',
        'Communicate company’s personality',
        'Comprehensive brand strategy planning'
    ];
    const items2 = [
        "Build your digital presence",
        "Engage potential customers",
        "Convey trust and legitimacy",
        "Create mobile responsive designs"
    ];
    const items3 = [
        "Seamless user experience",
        "Comprehensive competitors’ analysis",
        "Experienced teams of quality assurance",
        "Highly immersive app development"
    ];
    const items4 = [
        "Convert new audiences into loyal customers",
        "Push your brand message to the right audiences",
        "A powerful email algorithm",
        "Search Engine Marketing",
        "Social Media Marketing"
    ];
    const items5 = [
        "Speed and performance are priorities",
        "24 / 7 website monitoring plans",
        "Hacker prevention systems",
        "Scheduled backups"
    ];
    return (
        <div className="bran-identity-content py-5 ">
            <div className="container">
                <h2 className="titleline text-lg-start my-4">Presence Capabilities</h2>
                <div className="row BrandSPaceHomePage">
                    <div className="col-12 col-md-6 mb-5 mb-lg-0">
                        <h2 className="bold-title">BRAND <b>Identity</b></h2>
                        <img className="w-100 h-auto  d-md-none mb-5" src="Assets/Images/brand1.png" alt="" />
                        <div className="check-p">
                            {items.map((item, index) => (
                                <p className="align-items-center text-black d-flex gap-2" key={index}>
                                    <IoCheckmarkCircle className="mb-1" style={{ color: "#5584FF" }} size={18} /> {item}
                                </p>
                            ))}
                            <div className="text-start">
                                <ButtonC text="SEE MORE" to="/Brand-Identity" />
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-6 mb-5 mb-lg-0 d-none d-md-block">
                        <img className="w-100 h-auto " src="Assets/Images/brand1.png" alt="" />
                    </div>
                </div>
                {/* 2---- */}
                <div className="row   BrandSPaceHomePage">
                    <div className="col-12 col-md-6 mb-5 mb-lg-0 d-none d-md-block">
                        <img className="w-100 h-auto " src="Assets/Images/brand2.png" alt="" />
                    </div>
                    <div className="col-12 col-md-6 mb-5 mb-lg-0 text-center text-lg-end ">
                        <h2 className="bold-title">WEB <b>Design</b></h2>
                        <img className="w-100 h-auto  d-md-none mb-5" src="Assets/Images/brand2.png" alt="" />
                        <div className="d-flex justify-content-start justify-content-lg-center">
                            <div className="check-p ">
                                {items2.map((item, index) => (
                                    <p className="align-items-center text-center text-lg-end text-black d-flex gap-2" key={index}>
                                        <IoCheckmarkCircle style={{ color: "#5584FF" }} size={18} /> {item}
                                    </p>
                                ))}
                                <div className="text-start">
                                    <ButtonC text="SEE MORE" to="/web-design" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3---- */}
                <div className="row BrandSPaceHomePage ">
                    <div className="col-12 col-md-6 mb-5 mb-lg-0 ">
                        <h2 className="bold-title">WEB <b>Development</b></h2>
                        <img className="w-100 h-auto  d-md-none mb-5" src="Assets/Images/brand3-768x747.png" alt="" />
                        <div className="check-p">
                            {items3.map((item, index) => (
                                <p className="align-items-center text-black d-flex gap-2 " key={index}>
                                    <IoCheckmarkCircle style={{ color: "#5584FF" }} size={18} /> {item}
                                </p>
                            ))}
                            <div className="text-start">
                                <ButtonC text="SEE MORE" to="/web-development" />
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-6 mb-5 mb-lg-0 d-none d-md-block">
                        <img className="w-100 h-auto " src="Assets/Images/brand3-768x747.png" alt="" />
                    </div>
                </div>
                {/* 4---- */}
                <div className="row BrandSPaceHomePage ">
                    <div className="col-12 col-md-6  d-none d-md-block">
                        <img className="w-100 h-auto " src="Assets/Images/brand4.png" alt="" />
                    </div>
                    <div className="col-12 col-md-6 mb-5 mb-lg-0 text-center text-lg-end ">
                        <h2 className="bold-title">DIGITAL <b>Marketing</b></h2>
                        <img className="w-100 h-auto  d-md-none mb-5" src="Assets/Images/brand4.png" alt="" />
                        <div className="d-flex justify-content-start justify-content-lg-center">
                            <div className="check-p ">
                                {items4.map((item, index) => (
                                    <p className="align-items-center text-center text-lg-end text-black d-flex gap-2" key={index}>
                                        <IoCheckmarkCircle style={{ color: "#5584FF" }} size={18} /> {item}
                                    </p>
                                ))}
                                <div className="text-start">
                                    <ButtonC text="SEE MORE" to="/digital-marketing" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 5---- */}
                <div className="row BrandSPaceHomePage">
                    <div className="col-12 col-md-6 ">
                        <h2 className="bold-title">WEB <b>Maintenance</b></h2>
                        <img className="w-100 h-auto  d-md-none mb-5" src="Assets/Images/brand5.png" alt="" />
                        <div className="check-p">
                            {items5.map((item, index) => (
                                <p className="align-items-center text-black d-flex gap-2" key={index}>
                                    <IoCheckmarkCircle style={{ color: "#5584FF" }} size={18} /> {item}
                                </p>
                            ))}
                            <div className="text-start">
                                <ButtonC text="SEE MORE" to="/web-maintenance" />
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-md-6 mb-5 mb-lg-0 d-none d-md-block">
                        <img className="w-100 h-auto " src="Assets/Images/brand5.png" alt="" />
                    </div>
                </div>
                {/* ---- */}
            </div>
        </div>
    )
}

export default BrandIdentity
