import React from "react";
import "./styles.css";
import background from './background.png';
import example from './example2.png'; 
import logo from './logo.png';

export default function AdComponent() {
  return (
    <div className="ad-container" style={{ backgroundImage: `url(${background})` }}>
       <div className="ad-top-card">
        <img src={example} alt="Example" className="ad-example-image" />
        <img src={logo} alt="Logo" className="ad-logo" />
      </div>
      <h2 className="ad-title">Slice - You Browse We Pay</h2>
      <p className="ad-description">Slice Description that's longer</p>
      <div className="ad-buttons">
        <button className="ad-close-button">CLOSE</button>
        <button className="ad-open-button">OPEN</button>
      </div>
    </div>
  );
}
