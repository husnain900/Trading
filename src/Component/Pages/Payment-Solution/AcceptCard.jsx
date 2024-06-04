const paymentMethods = [
    { name: 'Bitcoin', image: 'Assets/Images/bitcoin.png' },
    { name: 'Bitcoin Cash', image: 'Assets/Images/cash.png' },
    { name: 'Dai', image: 'Assets/Images/dai.png' },
    { name: 'Ethereum', image: 'Assets/Images/ethereum.png' },
    { name: 'Litecoin', image: 'Assets/Images/litecoin.png' },
    { name: 'Contact us if you need solutions for other cryptocurrencies.' },
  ];
  
  const AcceptCard = () => {
    return (
      <div className="container">
        <h3 className="section-title text-start">You can accept</h3>
        <div className="row px-0 px-lg-5">
          {paymentMethods.map((paymentMethod, index) => (
            <div
              key={paymentMethod.name} // Use a unique key for each item
              className="col-12 col-md-6 col-lg-4 mb-4 accept-card"
            >
              <div
                style={{ backgroundColor: '#5584FF' }}
                className={`card border-0 rounded-0 h-100 ${
                  index === paymentMethods.length - 1 ? 'no-image' : ''
                }`}
              >
                <div className="d-flex justify-content-between align-items-center p-4 h-100">
                  <h4 className="card-text">{paymentMethod.name}</h4>
                  {index !== paymentMethods.length - 1 && ( // Conditionally render image
                    <img src={paymentMethod.image} alt={paymentMethod.name} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default AcceptCard;
  