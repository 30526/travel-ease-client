import React from "react";
import "./btn.css";
const NavBtn = ({ children }) => {
  return (
    <button className="cta">
      <span className="hover-underline-animation"> {children} </span>
    </button>
  );
};

export default NavBtn;
