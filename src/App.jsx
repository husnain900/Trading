
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Component/Common/Nav/Nav';
import Footer from './Component/Common/Footer/Footer';
import BrandIdentity from './Component/Pages/Brand_identity/BrandIdentity';



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<BrandIdentity />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
