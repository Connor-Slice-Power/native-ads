import React from "react";
import "./styles.css";
import photo from "./example.png"; 
import logo from "./logo.png";

export default function App() {
  return (
    <div className="ad-container">
      <img src={photo} alt="Ad background" className="ad-main-image" />
      <div className="ad-content">
        <h2 className="ad-title">Slice - You Browse We Pay</h2>
        <p className="ad-description">Slice Description that's longer</p>
        <div className="ad-footer">
          <span className="slice-ad">Slice Ad</span>
          <button className="ad-open-button">Open</button>
        </div>
      </div>
    </div>
  );
}
