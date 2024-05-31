
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Component/Common/Nav/Nav';
import BrandIdentity from './Component/Pages/Brand_identity/BrandIdentity';
import Footer from './Component/Common/Footer/Footer';



// Define some simple components for the pages
const Home = () => <h2>Home Page</h2>;

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/brand-identity' element={<BrandIdentity />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
