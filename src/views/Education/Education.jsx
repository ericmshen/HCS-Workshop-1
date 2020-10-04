import React, { useState } from "react";
import "./Education.css";

function EducationItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveSummary(props.summary);
        props.setActiveDescription(props.description);
        props.setActiveCoursework(props.coursework);
      }}
    >
      <div className="education-info">
        <h4>{props.title}</h4>
        <h4>{props.summary}</h4>
      </div>
    </div>
  );
}

export default function EducationScreen(props) {
  const [activeTitle, setActiveTitle] = useState("I'm still learning!");
  const [activeSummary, setActiveSummary] = useState("");
  const [activeDescription, setActiveDescription] = useState("");
  const [activeCoursework, setActiveCoursework] = useState("");

  return (
    <div className="screen-background">
      <div className="education-title">
        <h2>Education</h2>
      </div>
      <div className="education-background">
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <h4>{activeSummary}</h4>
          <p>{activeDescription}</p>
          <p>{activeCoursework}</p>
        </div>
        <div className="timeline-background">
          <EducationItem
            title="Harvard College"
            summary="AB, Class of 2024"
            description="Cambridge, MA. Currently a first-year studying remotely. I'm considering Applied Mathematics, Computer Science, and Statistics. I'm currently comping HCS, which is why I'm editing this portfolio!"
            coursework="Coursework: Math 25A, Physics 15A, Justice, Econ 10A, MIT 6.0001+2 (auditing)"
            setActiveTitle={setActiveTitle}
            setActiveSummary={setActiveSummary}
            setActiveDescription={setActiveDescription}
            setActiveCoursework={setActiveCoursework}
          />
          <EducationItem
            title="Bayview Secondary School"
            summary="Class of 2020"
            description="Richmond Hill, ON, Canada. Graduated from the IB Program, with a few AP exams done as well. Named a Top Scholar, or something, by my school board."
            coursework="Subjects: Higher Level Chemistry/English Literature/World History; Standard Level Mathematics/Physics/French B; AP Calc BC, Stats, Chem, Physics C (both), English Literature"
            setActiveTitle={setActiveTitle}
            setActiveSummary={setActiveSummary}
            setActiveDescription={setActiveDescription}
            setActiveCoursework={setActiveCoursework}
          />
          <EducationItem
            title="Silver Stream P.S."
            summary="2014-2016"
            description="Richmond Hill, ON, Canada. One of the elementary schools I attended."
            coursework="This isn't really relevant."
            setActiveTitle={setActiveTitle}
            setActiveSummary={setActiveSummary}
            setActiveDescription={setActiveDescription}
            setActiveCoursework={setActiveCoursework}
          />
        </div>
      </div>
    </div>
  );
}