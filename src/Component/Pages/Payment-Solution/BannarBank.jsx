const supportedCards = [
    { image: 'Assets/Images/visa.png', alt: 'Visa' },
    { image: 'Assets/Images/mastercard.png', alt: 'Mastercard' },
    { image: 'Assets/Images/diners.png', alt: 'Diners Club' },
    { image: 'Assets/Images/union.png', alt: 'UnionPay' },
];

const BannarBank = () => {
    return (
        <div className="Bankbannar d-flex text-center justify-content-center align-items-center">
            <div className="">
                <h2 className="section-title text-white ">Athena credit card payment gateway</h2>
                <div className="mt-4 d-flex gap-5 justify-content-center flex-wrap">
                    {supportedCards.map((card) => (
                        <img style={{ width: "128px" }} className="h-auto" key={card.alt} src={card.image} alt={card.alt} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannarBank;
