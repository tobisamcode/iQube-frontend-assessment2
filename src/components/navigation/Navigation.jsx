import React from "react";
import covid from "../../assets/covid.png";
import "./navigationStyle.css";

export default function Navigation() {
  return (
    <div className="app-bar">
      <img src={covid} alt="flag" />

      <h1>Covid Tracker</h1>
    </div>
  );
}
