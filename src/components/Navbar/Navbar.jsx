import React, { useState, useEffect, use } from "react";
import { Menu, ChevronDown } from "lucide-react";
import Theme from "../common/theme/Theme";
import { Link } from "react-router";
import MyLink from "../common/navlink/MyLink";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [checked, setChecked] = useState(() => {
    return localStorage.getItem("checked") === "true";
  });

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // theme
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    localStorage.setItem("checked", checked);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme, checked]);

  const onThemeBtnClick = (check) => {
    setTheme(check ? "dark" : "light");
    setChecked(check);
  };

  const navLinks = (
    <>
      <MyLink to="/">
        <li>Home</li>
      </MyLink>
      <MyLink to="/all-vehicles">
        <li>All Vehicles</li>
      </MyLink>
      <MyLink to="/add-vehicle">
        <li>Add Vehicle</li>
      </MyLink>
      <MyLink to="/my-vehicles">
        <li>My Vehicles</li>
      </MyLink>
      <MyLink to="/my-bookings">
        <li>My Bookings</li>
      </MyLink>
    </>
  );

  return (
    <div
      className={`
    navbar fixed top-0 left-0 right-0 z-50 px-4 md:px-8
    transition-all duration-300
    ${
      scrolled
        ? "bg-white/70 backdrop-blur-md"
        : "bg-base-100"
    }
  `}
    >
      {/* --- Navbar Start: Mobile Menu + Logo --- */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu className="h-6 w-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-2xl font-extrabold text-purple-700 tracking-tight cursor-pointer">
          TravelEase
        </a>
      </div>

      {/* --- Navbar Center: Desktop Links --- */}
      <div className=" hidden lg:flex items-center navbar-center">
        <ul className="flex text-md font-semibold gap-6">{navLinks}</ul>
      </div>

      {/* --- Navbar End: Auth UI --- */}
      <div className="navbar-end gap-2">
        <Theme checked={checked} onThemeBtnClick={onThemeBtnClick}></Theme>
        {!user ? (
          <div className="flex gap-2">
            <Link to="/login">
              <button
                className="btn btn-ghost btn-sm md:btn-md"
                // onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-primary btn-sm md:btn-md bg-purple-600 border-none text-white hover:bg-purple-700">
                Register
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="w-10 rounded-full border-2 border-purple-500">
                  <img alt="User Avatar" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 font-semibold"
              >
                <li>
                  <button className="text-error" onClick={() => signOutUser()}>
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
