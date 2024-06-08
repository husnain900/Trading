
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Component/Common/Nav/Nav';
import Footer from './Component/Common/Footer/Footer';
import Home from './Component/Pages/Home/home';
import BrandIdentity from './Component/Pages/Brand_identity/BrandIdentity';
import Hosting_Services from './Component/Pages/Hosting-Services/Hosting_Services';
import TradingServices from './Component/Pages/Trading-Services/TradingServices';
import Webdesign from './Component/Pages/WebDesign/Webdesign';
import PaymentSolution from './Component/Pages/Payment-Solution/PaymentSolution';
import AggregatedLiquidity from './Component/Pages/Aggregated-Liquidity/AggregatedLiquidity';
import WebDevelopment from './Component/Pages/WebDevelopment/WebDevelopment';
import DigitalMarketing from './Component/Pages/DigitalMarketing/DigitalMarketing';
import Webmaintaince from './Component/Pages/WebMaintaince/Webmaintaince';
import TermsAndConditions from './Component/Pages/Terms&Conditions/TermsAndConditions';
import Privacypolicy from './Component/Pages/Terms&Conditions/Privacypolicy/Privacypolicy';
import About from './Component/Pages/AboutUs/About';
import ContactUs from './Component/Pages/Contact-Us/ContactUs';
import ScrollToTop from './Component/Pages/Home/ScrollToTop ';



function App() {
  return (
    <Router>
      <Nav />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting-service" element={<Hosting_Services />} />
        <Route path="/Brand-Identity" element={<BrandIdentity />} />
        <Route path="/web-design" element={<Webdesign />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/web-maintenance" element={<Webmaintaince />} />
        <Route path="/trading-platform" element={<TradingServices />} />
        <Route path="/payment-solution" element={<PaymentSolution />} />
        <Route path="/aggregated-liquidity" element={<AggregatedLiquidity />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
