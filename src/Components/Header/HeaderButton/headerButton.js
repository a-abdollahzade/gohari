import React from "react";
import { GiReceiveMoney, GiRecycle } from "react-icons/gi";
import { RiShieldCheckLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import "../HeaderButton/headerButton.css"

function headerButton() {
  return (
    <>
      <div className="header-button">
        <button>
          <GiReceiveMoney className="icons" />
        </button>
        <button>
          <GiRecycle className="icons" />
        </button>
        <button>
          <RiShieldCheckLine className="icons" />
        </button>
        <button>
          <IoMdCheckmarkCircleOutline className="icons" />
        </button>
      </div>
    </>
  );
}

export default headerButton;
