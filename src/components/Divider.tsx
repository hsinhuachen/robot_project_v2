import React from "react";
import DividerIcon from "@assets/images/divider.svg";

function Divider() {
  return (
    <div className="divider">
      <div className="icon"><img src={DividerIcon.src} alt="" /></div>
      <span></span>
    </div>
  );
}


export default Divider;
