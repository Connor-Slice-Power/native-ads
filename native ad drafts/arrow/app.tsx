import React from "react";
import "./styles.css";
import logo from "./logo.png"; // Assuming logo.png is in the same directory
import exampl from "./exampl.png"; // Assuming exampl.png is also in the same directory
import arrowIcon from "./arrow.png";

export default function App() {
  return (
    <div className="ad-container">
      <div className="ad-image-container">
        <img src={exampl} alt="Ad example background" className="ad-background-image" />
        {/* Additional ad content can go here if needed */}
      </div>
      <div className="ad-content">
        <h2 className="ad-title">Slice - You Browse We Pay</h2>
        <div className="ad-footer">
          <img src={logo} alt="Slice logo" className="ad-logo" />
          <p className="ad-description">Slice Description that's longer and gives more detail</p>
          <button className="ad-open-button">
          <img src={arrowIcon} alt="Open" className="arrow-icon" />
        </button>
        </div>
      </div>
    </div>
  );
}
