import ButtonC from "../../Ui-Component/Button"

function MobileSection() {
    return (
        <div style={{ background: "#0E1B36" }} className="MobileSection py-5 px-2 px-lg-5 my-2 my-lg-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-4">
                        <img className="w-100 h-auto p-5 p-lg-2" src="Assets/Images/mobile2-1.png" alt="" />
                    </div>
                    <div className="col-12 col-md-8">
                        <h3 className="section-title text-white text-lg-start">Download MetaTrader</h3>
                        <div className=" d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start mt-0 mt-lg-5 mobile-btn-down">
                            <div className="d-none d-lg-block">
                                <ButtonC text="Windows" to="https://download.mql5.com/cdn/web/athena.inc/mt4/athena4setup.exe" icon="windows" />
                            </div>
                            <ButtonC text="Apple" to="https://apps.apple.com/us/app/metatrader-4/id496212596" icon="apple" />
                            <ButtonC text="Android" to="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4&hl=en&referrer=ref_id%3d5188185631892253929%26server%3dPSS-Demo%252cPSS-Live" icon="android" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileSection
