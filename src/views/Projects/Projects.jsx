import React from "react";
import Project from "../../components/Project/Project";

export default function ProjectsScreen() {
  return (
    <div className="screen-background">
      <h2>Projects (a minimal list)</h2>
      <Project
        title="CS50x Project"
        description="A simple little loan calculator, made with the help of Flask and Chartist.js"
        link="https://github.com/ericmshen/cs50x-proj"
      />
      <Project
        title="Personal Portfolio"
        description="You're on it right now!"
        link="/about"
      />
      <Project
        title="Old Hackathons"
        description="Two projects from a long time ago"
        link="https://devpost.com/ericmshen"
      />
    </div>
  );
}
