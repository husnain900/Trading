import ButtonC from "../../Ui-Component/Button"

function MobileSection() {
    return (
        <div style={{ background: "#0E1B36" }} className="MobileSection py-4 px-2 px-lg-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4">
                        <img className="w-100 h-auto" src="Assets/Images/mobile2-1.png" alt="" />
                    </div>
                    <div className="col-12 col-md-8">
                        <h3 className="section-title text-white text-lg-start">Download MetaTrader</h3>
                        <div className=" d-flex flex-wrap gap-1 gap-lg-4">
                            <ButtonC   text="Windows" to="#" icon="windows" />
                            <ButtonC   text="Apple" to="#" icon="apple" />
                            <ButtonC   text="Android" to="#" icon="android" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSection
