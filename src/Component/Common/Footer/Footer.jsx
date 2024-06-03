import "./footer.css";
const Footer = () => {
    return (
        <div className="footer text-center bg-white text-lg-start">
            <div className="container">
                <div className="row py-5">
                    <div className="col-12 col-lg-2 mb-4 mb-lg-0">
                        <div className="footer-logo">
                            <img className="w-100 h-auto" src="Assets/Images/Logo/footer-athena.png" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                        <div className="d-flex gap-5 justify-content-center justify-content-lg-start"><h5>About Us </h5> <h5>Contact US</h5></div>
                        <h5>We lead you to jump start and grow strong. Discuss with us your goal, our job is to help you reach it.</h5>
                    </div>
                    <div className="col-12 col-lg-5 footer-text ">
                        <p>Athena Technology Limited (UK Register: 13275910), 71-75 Shelton Street, Covent Garden, England, London, WC2H 9JQ, United Kingdom, Tel. + 44 20 8089 9460, E. admin@fathena.com Athena Technology does not provide financial services and its business address is 35 HanNam-Daero, YongSan-Gu, Seoul, South Korea.</p>
                        <p>Disclaimer: Information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.</p>
                    </div>
                </div>
                <div className="text-center bottom-footer pt-3">
                    <p>Copyright © 2024 Athena. All rights reserved. <a href="" className="pe-2" >Terms of Use</a> <a href="" >Privacy Policy</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
