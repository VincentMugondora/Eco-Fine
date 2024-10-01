import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar'; 
import Home from './components/home/Home'; 
import About from './components/about/About'; 
import Service from './components/service/Service';
import Blog from './components/blog/Blog'; 
import Contact from './components/contact/Contact'; 

const App = () => {
    return (
        <div className="container">
          <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
        </div>
    );
};

export default App;