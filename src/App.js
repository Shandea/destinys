import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Views/Pages/Layout";
import Home from "./Views/Pages/Home";
import About from "./Views/Pages/About";
import Contact from "./Views/Pages/Contact";
import Services from "./Views/Pages/Services";
import Community from "./Views/Pages/Community";
import Cake from "./Views/Pages/Cake";
import CupCake from "./Views/Pages/CupCake";
import Cookies from "./Views/Pages/Cookies";
import "./global.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cake" element={<Cake />} />
            <Route path="/cupcake" element={<CupCake />} />
            <Route path="/cookies" element={<Cookies />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
