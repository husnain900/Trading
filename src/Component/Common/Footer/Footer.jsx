import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
    return (
        <div className="footer text-center bg-white text-lg-start">
            <div className="container">
                <div className="row py-3 align-items-center">
                    <div className="col-12 col-lg-2 mb-4 mb-lg-0">
                        <div className="footer-logo">
                            <Link to="/">
                                <img className="w-100 h-auto" src="Assets/Images/Logo/footer-athena.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 mb-4 mb-lg-0">
                    </div>
                    <div className="col-12 col-lg-5 footer-text">
                        <div className="ms-0 ms-lg-auto ">
                            <div className="d-flex gap-5 justify-content-center justify-content-lg-start pb-3">
                                <Link className="nav-link-foot" to="/about-us">About Us</Link>
                                <Link className="nav-link-foot" to="/contact-us">Contact Us</Link>
                            </div>

                        </div>
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
                <div className="text-center text-lg-start py-3 ">
                    <p> <b> Disclaimer: </b> Athena Technology operates solely as an information technology company. We expressly disclaim any provision of financial services or acceptance of investments. The contents of this site are not designed for distribution to, or use by, any individuals or entities in any jurisdiction or country where such distribution or use would contravene local laws or regulations. Athena Technology is not authorized to engage in or offer financial services or investment opportunities.
                    </p>
                    <p style={{ textAlign: 'center', color: '#b7c0d5', marginBottom: "20px" }}> © Copyright 2024. Athena. All Right Reserved <a href="/terms"> Terms of use</a> | <a href="/privacy-policy"> Privacy Policy</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
