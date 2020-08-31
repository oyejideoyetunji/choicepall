import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="container nav-bar">
        <span className="brand-name">Choicepall</span>
      </nav>
      <header className="hdr-rw-ctr">
        <h1>Your Wing-man when choosing</h1>
        <p>
          Is it too hard to just pick one?, your decion making pall does that
          for you
        </p>
      </header>
    </>
  );
};

export default Header;
