import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

export default function Project(props) {
  return (
    <Link
      className="project-background"
      to={{ pathname: props.link }}
      target="_blank"
    >
      <div className="project-info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}
