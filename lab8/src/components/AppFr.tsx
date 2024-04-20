import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "../App";
import HelpFr from "./HelpFr";
import RatingsFr from "./RatingsFr";
import ProductListFr from "./ProductListFr";
import Logo from "./Logo"; // Import the Logo component
import { TfiHelpAlt } from "react-icons/tfi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";

function AppFr() {
  const [language, setLanguage] = useState<string>('french');

  const handleLanguageSwitch = () => {
    setLanguage(language === 'french' ? 'english' : 'french');
  };

  return (
    <div className="container">
      <Routes>
      
  <Route path="/" element={<HomePage language={language} handleLanguageSwitch={handleLanguageSwitch} />} />
  <Route path="/RatingsFr" element={<RatingsFr />} />
  <Route path="/product-listFr" element={<ProductListFr />} />
  <Route path="/HelpFr" element={<HelpFr />} />
  <Route path="/AppFr" element={<AppFr />} />

      </Routes>
    </div>
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
              <Link style={{ textDecoration: "none" }} to="/AppFr/RatingsFr">
                Évaluations
              </Link>
            </li>
            <li>
              <MdOutlineProductionQuantityLimits />
              <Link style={{ textDecoration: "none" }} to="/AppFr/product-listFr">
                Liste des produits
              </Link>
            </li>
            <li>
              <TfiHelpAlt />
              <Link style={{ textDecoration: "none" }} to="/AppFr/HelpFr">
                Aide
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

export default AppFr;

