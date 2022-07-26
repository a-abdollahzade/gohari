import React from "react";
import Nav from "./Nav/nav";
import Logo from "./Logo/logo";

import "../Navbar/navbar.css";

function navbar() {
  return (
    <div className="nav-container">
      <Logo />
      <Nav />
    </div>
  );
}

export default navbar;
