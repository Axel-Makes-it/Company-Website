import React from "react";
import "../styles/SectionOne.css";
import dash from "../images/dashboard.png";

function SectionOne() {
  return (
    <div className="sectionOne_container">
      <div className="sectionOne_container-wrapper">
        <img src={dash} alt="dashboard" />
      </div>
    </div>
  );
}

export default SectionOne;
