import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Help from "./components/Help";
import Ratings from "./components/Ratings";
import Logo from "./components/Logo"; // Import the Logo component
import ProductList from "./components/ProductList";
import { TfiHelpAlt } from "react-icons/tfi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import AppFr from './components/AppFr';
import RatingsFr from "./components/RatingsFr";
import ProductListFr from "./components/ProductListFr";
import HelpFr from "./components/HelpFr";

function App() {
  const [language, setLanguage] = useState<string>('english');

  const handleLanguageSwitch = () => {
    setLanguage(language === 'english' ? 'french' : 'english');
  };
  
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage language='english' handleLanguageSwitch={handleLanguageSwitch} />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/AppFr">
            <Route index element={<AppFr />} />
            <Route path="/AppFr/RatingsFr" element={<RatingsFr />} />
            <Route path="/AppFr/product-listFr" element={<ProductListFr />} />
            <Route path="/AppFr/HelpFr" element={<HelpFr />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

function HomePage({ language, handleLanguageSwitch }: { language: string, handleLanguageSwitch: () => void }) {
  return (
    <div className="main-content">
      <div className="top-middle-content">
        <Logo /> {/* Use the Logo component */}
      </div>
      <div className="bottom-left-content">
        {/* Navigation Links */}
        <nav>
          <ul style={{ listStyle: "none" }}>
            <li>
              <RiStarSFill />
              <Link style={{ textDecoration: "none" }} to="/ratings">
                Ratings
              </Link>
            </li>
            <li>
              <MdOutlineProductionQuantityLimits />
              <Link style={{ textDecoration: "none" }} to="/product-list">
                List of Products
              </Link>
            </li>
            <li>
              <TfiHelpAlt />
              <Link style={{ textDecoration: "none" }} to="/Help">
                Help
              </Link>
            </li>
          </ul>
          <Link to={language === 'english' ? "/AppFr" : "/"} className="switch-language-link" onClick={handleLanguageSwitch}>
            {language === 'english' ? 'Switch to French' : 'Switch to English'}
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
