import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-blue-700 font-semibold" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
