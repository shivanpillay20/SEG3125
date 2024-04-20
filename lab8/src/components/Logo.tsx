// Logo.js
import React from 'react';
import logoImage from '../assets/uoBooksLogo.png'; // Import your logo image

function Logo() {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="uoBooks Logo" className="logo" style={{ maxWidth: "350px", maxHeight: "350px" }}/>
    </div>
  );
}

export default Logo;
