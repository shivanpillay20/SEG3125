import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);
  
  return (
    <div className="navigation-bar">
      <Link to="/">Home</Link>
      {paths.map((path, index) => (
        <React.Fragment key={path}>
          <span> {">"} </span>
          <Link to={"/" + paths.slice(0, index + 1).join("/")}>{path}</Link>
        </React.Fragment>
      ))}
    </div>
  );
}
export default NavigationBar;