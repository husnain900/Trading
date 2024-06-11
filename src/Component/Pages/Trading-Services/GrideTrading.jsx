import { useState, useEffect } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

const GrideTrading = () => {
    const items1 = [
        'Forex',
        'Stocks & Indices',
        'Cryptocurrencies',
        'Gold & Silver',
        'Oil and gas'
    ];

    const items2 = [
        'News feeds on all markets including stocks and commodities',
        'Adjustable leverage system',
        'Automated account opening bonus'
    ];

    const items3 = [
        'Built-in deposit and withdraw modules',
        'Advanced affiliate marketing tools',
        'Adjustable leverage system'
    ];

    const items4 = [
        'Aggregate liquidity with markup functions',
        'Auto switch to A book based on trading volume',
        'Customized trading activity reports',
        'Sophisticated dealer’s station'
    ];

    const items5 = [
        'Create different rebate for master IB and sub-IBs',
        'Rebates and commission rates base on points and trading volumes'
    ];

    const items6 = [
        'Trading hours and symbol setting',
        'IP monitoring and blocking',
        'Holiday trading hour notification',
        'Swap rate adjustment',
        'Automated daily trading report',
        'Automatic backup in real time',
        'Proxy servers around the world'
    ];

    const cardData = [
        { title: '500+ trading instruments', items: items1, image: 'Assets/Images/trade1.png' },
        { title: 'Trading support tools', items: items2, image: 'Assets/Images/trade2.png' },
        { title: 'Customizable Trader’s Room', items: items3, image: 'Assets/Images/trade3.png' },
        { title: 'Risk management tools', items: items4, image: 'Assets/Images/trade4.png' },
        { title: 'Multi-Level rebate structure', items: items5, image: 'Assets/Images/trade5.png' },
        { title: '24/7 Technical support', items: items6, image: 'Assets/Images/trade6.png' }
    ];

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

    return (
        <div className="container">
            <div className="row">
                {cardData.map((card, cardIndex) => (
                    <div className="col-12 col-md-6" key={cardIndex}>
                        <div className={`card-trading my-5 py-0 py-lg-4  ${[1, 3, 5].includes(cardIndex) ? 'ms-0 ms-lg-auto' : ''}`}>
                            <img src={card.image} alt={card.title} />
                            <h3 style={{ fontSize: isMobile ? '28px' : '35px', padding: '0' }} className="section-title text-start">{card.title}</h3>
                            <div className="check-p py-4">
                                {card.items.map((item, itemIndex) => (
                                    <p className="align-items-center  text-black d-flex gap-2" key={itemIndex}>
                                        <IoCheckmarkCircle style={{ color: "#5584FF" }} size={22} /> {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GrideTrading;
