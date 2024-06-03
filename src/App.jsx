
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



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hosting-service" element={<Hosting_Services />} />
        <Route path="/Brand-Identity" element={<BrandIdentity />} />
        <Route path="/web-design" element={<Webdesign />} />
        <Route path="/trading-platform" element={<TradingServices />} />
        <Route path="/payment-solution" element={<PaymentSolution />} />
        <Route path="/aggregated-liquidity" element={<AggregatedLiquidity />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
