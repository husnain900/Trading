
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Component/Common/Nav/Nav';
import Footer from './Component/Common/Footer/Footer';
import Home from './Component/Pages/Home/home';
import BrandIdentity from './Component/Pages/Brand_identity/BrandIdentity';
import Hosting_Services from './Component/Pages/Hosting-Services/Hosting_Services';
import TradingServices from './Component/Pages/Trading-Services/TradingServices';
import Webdesign from './Component/Pages/WebDesign/Webdesign';
import WebDevelopment from './Component/Pages/WebDevelopment/WebDevelopment';
import DigitalMarketing from './Component/Pages/DigitalMarketing/DigitalMarketing';



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting-service" element={<Hosting_Services />} />
        <Route path="/Brand-Identity" element={<BrandIdentity />} />
        <Route path="/web-design" element={<Webdesign />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/trading-platform" element={<TradingServices />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
