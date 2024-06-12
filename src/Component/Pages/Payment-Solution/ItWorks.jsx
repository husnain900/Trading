
const ItWorks = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-6">
                    <h1 className="section-title text-start text-larger p-0 m-0" >
                        How does it works
                    </h1>
                    <h3 className="bluetitle my-2 ">We don’t hold your crypto. You do. We give you all the benefits of a hosted platform while you maintain ownership.</h3>
                </div>
            </div>
            <div className="row mt-2 mb-5">
                <div className="col-12 col-md-6 mb-lg-0 mb-5">
                    <div className="position-relative">
                        <img className="w-100 h-auto" src="Assets/Images/13.png" alt="" />
                        <h4 className="bluetitle text-black position-absolute position-adjust">Client opens a trading account.</h4>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-none d-lg-block">
                    <div className="d-flex align-items-center  h-100">
                        <img src="Assets/Images/arrow-2.png" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6 d-none d-lg-block">
                    <div className="d-flex align-items-center  h-100 justify-content-end">
                        <img src="Assets/Images/arrow-3.png" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-lg-0 mb-5">
                    <div className="position-relative">
                        <img className="w-100 h-auto" src="Assets/Images/14.png" alt="" />
                        <h4 className="bluetitle text-black position-absolute position-adjust">Athena creates a wallet for each trading account.</h4>
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-lg-0 mb-5">
                    <div className="position-relative">
                        <img className="w-100 h-auto" src="Assets/Images/15.png" alt="" />
                        <h4 className="bluetitle text-black position-absolute position-adjust">Client sends cryptocurrency to the wallet.</h4>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-none d-lg-block">
                    <div className="d-flex align-items-center  h-100">
                        <img src="Assets/Images/arrow-2.png" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6 mb-lg-0 mb-5 d-none d-lg-block"></div>
                <div className="col-12 col-md-6 mb-lg-0 mb-5">
                    <div className="position-relative">
                        <img className="w-100 h-auto" src="Assets/Images/16.png" alt="" />
                        <h4 className="bluetitle text-black position-absolute position-adjust">Athena credits the amount to the corresponding trading account.</h4>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItWorks
