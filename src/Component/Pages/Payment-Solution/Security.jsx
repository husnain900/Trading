const partners = [
    { image: 'Assets/Images/coin.png', alt: '' },
    { image: 'Assets/Images/gemini.png', alt: '' },
    { image: 'Assets/Images/blockchain.png', alt: '' },
];

const Security = () => {
    return (
        <div className="container">
            <div className="row">
                <h3 className="section-title text-start">Security is our priority</h3>
                <h4>Our cryptocurrency trading partners.</h4>
                {partners.map((partner) => (
                    <div
                        key={partner.alt} // Use a unique key for each item
                        className="col-12 col-md-6 col-lg-4 partner-cards mt-4"
                    >
                        <div style={{ background: '#F3F5F8' }} className="card p-5 border-0 rounded-0 h-100">
                            <div className="d-flex justify-content-center align-items-center h-100">
                                <img src={partner.image} alt={partner.alt} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Security;
