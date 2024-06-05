import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
    return (
        <div className="footer text-center bg-white text-lg-start">
            <div className="container">
                <div className="row py-3 py-lg-5">
                    <div className="col-12 col-lg-2 mb-4 mb-lg-0">
                        <div className="footer-logo">
                            <img className="w-100 h-auto" src="Assets/Images/Logo/footer-athena.png" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                        <div className="ms-0 ms-lg-auto">
                            <div className="d-flex gap-5 justify-content-center justify-content-lg-start">
                                <h5>About Us </h5> <h5>Contact US</h5>
                            </div>
                            <h5>We lead you to jump start and grow strong. Discuss with us your goal, our job is to help you reach it.</h5>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 footer-text">
                        <p>
                            <b> Athena Technology Limited HQ </b> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.
                            Tel: <a href="tel:+442080899460">+44 20 8089 9460</a> | Email: <a href="mailto:admin@fathena.com">admin@fathena.com</a>
                        </p>
                        <p>
                            <b> Athena Technology Korea </b> 35 HanNam-Daero, YongSan-Gu, Seoul, South Korea.
                            Tel: <a href="tel:+8227901323">+82.2.790.1323</a> | Email: <a href="mailto:support@fathena.com">support@fathena.com</a>
                        </p>
                    </div>

                </div>
                <div className="text-center text-lg-start pt-0 pt-lg-3">
                    <p> <b> Disclaimer: </b> Athena Technology operates solely as an information technology company. We expressly disclaim any provision of financial services or acceptance of investments. The contents of this site are not designed for distribution to, or use by, any individuals or entities in any jurisdiction or country where such distribution or use would contravene local laws or regulations. Athena Technology is not authorized to engage in or offer financial services or investment opportunities.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
