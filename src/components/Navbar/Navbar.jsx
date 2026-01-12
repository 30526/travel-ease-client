import React, { useState, useEffect, use } from "react";
import {
  Menu,
  ChevronDown,
  LogOut,
  CalendarCheck,
  Award,
  Clock,
} from "lucide-react";
import { format, formatDate } from "date-fns";
import Theme from "../common/theme/Theme";
import { Link } from "react-router";
import MyLink from "../common/navlink/MyLink";
import AuthContext from "../../context/AuthContext";
import MenuBar from "../MenuBar/MenuBar";

const Navbar = () => {
  const { user, signOutUser, loading } = use(AuthContext);
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

  const navUlClass = "leading-tight uppercase italic tracking-tighter";

  const navLinks = (
    <>
      <MyLink to="/">
        <li className={navUlClass}>Home</li>
      </MyLink>
      <MyLink to="/allVehicles">
        <li className={navUlClass}>All Vehicles</li>
      </MyLink>
      <MyLink to="/addVehicles">
        <li className={navUlClass}>Add Vehicle</li>
      </MyLink>
      <MyLink to="/myVehicles">
        <li className={navUlClass}>My Vehicles</li>
      </MyLink>
      <MyLink to="/myBookings">
        <li className={navUlClass}>My Bookings</li>
      </MyLink>
    </>
  );

  const today = new Date();
  const formateDate = format(today, "dd MMM yyy");
  const formatTime = format(today, "hh : mm a");

  return (
    <div
      className={`
    navbar fixed top-0 left-0 right-0 z-50 px-4 md:px-8
    transition-all duration-300
    ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-base-100"}
  `}
    >
      {/* --- Navbar Start: Mobile Menu + Logo --- */}
      <div className="navbar-start">
        {/* <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu className="h-6 w-6" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium"
          >
            {navLinks}
          </ul>
        </div> */}
        <MenuBar navLinks={navLinks}></MenuBar>
        <p className="text-2xl font-extrabold text-amber-400 tracking-tight cursor-pointer leading-tight uppercase italic">
          Travel<span className="text-black">Ease</span>
        </p>
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
              <button className="btn btn-primary btn-sm md:btn-md bg-amber-400 border-none text-white hover:bg-black shadow-none">
                Login
              </button>
            </Link>
          </div>
        ) : loading ? (
          <span className="loading loading-spinner text-warning"></span>
        ) : (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border-2 border-amber-500 hover:border-amber-400 transition-colors">
                  <img
                    alt="User Avatar"
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                  />
                </div>
              </div>

              <div
                tabIndex={0}
                className="dropdown-content mt-3 z-[10] shadow-2xl bg-white border border-slate-100 rounded-[2rem] w-72 overflow-hidden"
              >
                {/* 1. Identity Header */}
                <div className="bg-slate-900 p-6 text-center relative">
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-green-500/20 px-2 py-0.5 rounded-full border border-green-500/30">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] text-green-400 font-black uppercase tracking-tighter">
                      Verified
                    </span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl border-2 border-amber-400 mx-auto mb-3 overflow-hidden shadow-lg shadow-amber-400/20">
                    <img
                      src={user?.photoURL}
                      alt="User profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-black italic uppercase tracking-tighter text-lg">
                    {user?.displayName}
                  </h3>
                  <p className="text-slate-400 text-xs font-medium lowercase truncate">
                    {user?.email}
                  </p>
                </div>
                <div className="px-4 py-2.5 bg-amber-50/50 border-b border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock size={12} className="text-amber-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Live Session
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-amber-600 italic leading-none">
                      {formatTime}
                    </p>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">
                      {formateDate}
                    </p>
                  </div>
                </div>

                {/* 2. Professional Stats Section */}
                <div className="p-4 bg-slate-50 grid grid-cols-2 gap-2">
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 text-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">
                      Rentals
                    </p>
                    <p className="text-slate-900 font-black text-xl italic">
                      12
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100 text-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">
                      Points
                    </p>
                    <p className="text-amber-500 font-black text-xl italic">
                      2.4k
                    </p>
                  </div>
                </div>

                {/* 3. Account Status Info */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Award size={14} className="text-amber-500" />
                      <span className="text-[11px] font-bold uppercase">
                        Member Level
                      </span>
                    </div>
                    <span className="text-[11px] font-black text-slate-900 italic uppercase">
                      Gold VIP
                    </span>
                  </div>

                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-2 text-slate-500">
                      <CalendarCheck size={14} className="text-blue-500" />
                      <span className="text-[11px] font-bold uppercase">
                        Joined
                      </span>
                    </div>
                    <span className="text-[11px] font-black text-slate-900 italic uppercase">
                      {formateDate}
                    </span>
                  </div>
                </div>

                {/* 4. Functional Footer */}
                <div className="p-4 border-t border-slate-50">
                  <button
                    onClick={() => signOutUser()}
                    className="w-full bg-slate-900 hover:bg-red-700 cursor-pointer hover:text-white text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <LogOut size={14} />
                    Sign Out Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
