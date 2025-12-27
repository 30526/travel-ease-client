import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const LayOut = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </>
  );
};

export default LayOut;
