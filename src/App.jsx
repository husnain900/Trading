
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Component/Common/Nav/Nav';

// Define some simple components for the pages
const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Nav />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
