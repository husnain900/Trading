
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Component/Common/Nav/Nav';
import Footer from './Component/Common/Footer/Footer';
import Home from './Component/Pages/Home/home';
import BrandIdentity from './Component/Pages/Brand_identity/BrandIdentity';
import Hosting_Services from './Component/Pages/Hosting-Services/Hosting_Services';
<<<<<<< Updated upstream
import TradingServices from './Component/Pages/Trading-Services/TradingServices';
=======
import Webdesign from './Component/Pages/WebDesign/Webdesign';
>>>>>>> Stashed changes



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting-service" element={<Hosting_Services />} />
        <Route path="/Brand-Identity" element={<BrandIdentity />} />
<<<<<<< Updated upstream
        <Route path="/trading-platform" element={<TradingServices />} />
=======
        <Route path="/web-design" element={<Webdesign />} />
>>>>>>> Stashed changes
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
