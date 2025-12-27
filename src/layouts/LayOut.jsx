import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const LayOut = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="pt-16">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default LayOut;
