import  { useState, useEffect } from "react";
import "./tradingservices.css";

function MetaTraders() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const titleStyle = {
        color: '#444444',
        fontSize: isMobile ? '32px' : '65px',
        textAlign: 'left'
    
    };

    return (
        <div className="container">
            <div className="MetaTraders-content mt-5">
                <div className="row">
                    <div className="col-12 col-lg-10">
                        <h1 className="section-title" style={titleStyle}>
                            MetaTrader 4 & MetaTrader 5
                            Your Gateway to the Markets
                        </h1>
                        <h3 className="bluetitle my-4"> Chosen by Millions of Traders Worldwide.</h3>
                        <p className="section-text2">
                            Unlock the potential of the markets with MetaTrader. At Athena, we provide a straightforward, swift, and cost-effective brokerage startup package tailored for both emerging and growing brokerages eager to establish their own brand. Whether you’re just starting out or looking to expand, our MetaTrader solutions offer the perfect platform to connect with the global trading community.
                        </p>
                    </div>
                    <div className="col-12">
                        <img className="w-100 h-auto" src="Assets/Images/2nd.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MetaTraders;
