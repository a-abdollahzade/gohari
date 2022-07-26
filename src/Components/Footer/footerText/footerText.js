import React from "react";

import { FaUserAlt, FaScrewdriver, FaHome } from "react-icons/fa";

import "../footerText/footerText.css";

function footerText() {
  return (
    <>
      <li className="footer-li">
        <FaScrewdriver className="footer-icons-blue" />
      </li>
      <div className="footer-tab">
        <ul>
          <li>
            <FaUserAlt className="footer-icons" />
          </li>
          <li>
            <FaHome className="footer-icons" />
          </li>
        </ul>
      </div>
    </>
  );
}

export default footerText;
