import React from "react";
import "./styles.css";
import logo from './logo.png';
import example from './fuboexample.png';

export default function App() {
  return (
    <div className="ad-container">
      <button className="slice-ad">Slice Ad</button>
      <button className="close-button">X</button>
      
      {/* Can change to 'ad-pic' and {example} to see photo style */}
      <img className="ad-logo" src={logo}/> 
      
      <h2 className="ad-title">Slice - You Browse We Pay</h2>
      <p className="ad-description">Slice Description that's longer</p>
      <button className="ad-open-button">Open</button>
    </div>
  );
}
