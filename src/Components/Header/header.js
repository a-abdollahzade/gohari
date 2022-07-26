import React from "react";
import HeaderButton from "./HeaderButton/headerButton";
import HeaderText from "./HeaderText/headerText";

import "../Header/header.css";

function header() {
  return (
    <div className="header-container">
      <HeaderButton />
      <HeaderText />
    </div>
  );
}

export default header;
