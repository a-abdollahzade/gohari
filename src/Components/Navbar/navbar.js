import React from "react";
import { TbHeadset, TbHeartHandshake } from "react-icons/tb";
import { GiRingingBell } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

import "../Navbar/navbar.css";

function navbar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <h2>ASETCO</h2>
      </div>
      <div className="nav">
        <ul>
          <li>
            <TbHeartHandshake />
          </li>
          <li>
            <TbHeadset />
          </li>
          <li>
            <GiRingingBell />
          </li>
          <li>
            <AiOutlineMenu />
          </li>
        </ul>
        <div className="hamberger"></div>
      </div>
    </div>
  );
}

export default navbar;
