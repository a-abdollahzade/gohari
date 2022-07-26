import React from "react";
import SvgFooter from "./svgFooter/svgFooter";
import FooterText from "./footerText/footerText"

import "../Footer/footer.css";

function footer() {
  return (
    <div className="footer-container">
      <SvgFooter />
      <FooterText />
    </div>
  );
}

export default footer;
