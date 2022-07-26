import React from "react";

import { TbHeadset, TbHeartHandshake } from "react-icons/tb";
import { GiRingingBell } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";

import "../Nav/nav.css"

function nav() {
  return (
    <>
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
        <div></div>
      </div>
    </>
  );
}

export default nav;
