import React from "react";
import { GiReceiveMoney, GiRecycle } from "react-icons/gi";
import { RiShieldCheckLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import "../Header/header.css";

function header() {
  return (
    <div className="header-container">
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
      <ul className="button-text">
        <li>فضای رقابتی</li>
        <li>درآمد فعال</li>
        <li>بیمه</li>
        <li>مدیریت مشتری</li>
      </ul>
    </div>
  );
}

export default header;
