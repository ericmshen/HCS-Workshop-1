import React from "react";
import "./Footer.css";
import { Link, useLocation } from "react-router-dom";
import ReactLogo from "../../assets/react.png";

export default function Navbar() {
  return (
    <div>
      <div className="about-footer">
        <span>This is a React App, created for HCS Workshop 1. NOT A LEGITIMATE PORTFOLIO.</span>
      </div>
      <img className="span-picture" src={ReactLogo}></img>
    </div>
  );
}
