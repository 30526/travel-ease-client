import React from "react";
import { NavLink } from "react-router";
import NavBtn from "../navButton/NavBtn";

const MyLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-[#ffaa0b] font-semibold" : ""
      }
    >
      <NavBtn>{children}</NavBtn>
    </NavLink>
  );
};

export default MyLink;
