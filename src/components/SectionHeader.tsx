import React from "react";
import Divider from "@components/Divider";

function SectionHeader({title}) {
  return (
    <div className="section-header">
      <strong>{title}</strong>
      <Divider />
    </div>
  );
}


export default SectionHeader;
