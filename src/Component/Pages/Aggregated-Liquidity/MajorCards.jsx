
const MajorCards = () => {
    const partners = [
        { image: 'Assets/Images/cardslogo/logo01.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo02.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo03.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo04.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo05.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo06.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo07.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo08.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo09.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo10.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo11.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo12.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo13.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo14.png', alt: '' },
        { image: 'Assets/Images/cardslogo/logo15.png', alt: '' },
    ];

    return (
        <div className="container">
            <div className="row my-5 pb-1 pb-lg-5">
                <h3 className="section-title my-4 my-lg-5 pt-1 pt-lg-5">Major liquidities providers in our ecosystem</h3>
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
}

export default MajorCards
