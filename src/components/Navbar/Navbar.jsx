import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Eric Shen</h1>
        <div className="info-bar">
          <p className="info-item">HCS React Portfolio</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "mailto:ericshen@college.harvard.edu" }}
            target="_blank"
          >
            email
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.instagram.com/eric.m.shen/" }}
            target="_blank"
          >
            instagram
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://github.com/ericmshen" }}
            target="_blank"
          >
            github
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://open.spotify.com/user/mcjmy0h6k1c0g8pfmselhlbfs?si=FazEdHwnToaNX_BjP6myGQ" }}
            target="_blank"
          >
            spotify
          </Link>
          <Link
            className="info-link" id="yt"
            to={{ pathname: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }}
            target="_blank"
          >
            youtube
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/about" }}>
            about
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/education" }}>
            education
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/experience" }}>
            experience
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/projects" }}>
            projects
          </Link>
        </div>
      </div>
    </>
  );
}
