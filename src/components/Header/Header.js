import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="container nav-bar">
        <span className="brand-name">Choicepall</span>
      </nav>
      <header className="hdr-rw-ctr">
        <h1>Choose with Choicepall</h1>
        <p>Too hard to just pick one?, Choicepall does that for you</p>
      </header>
    </>
  );
};

export default Header;
