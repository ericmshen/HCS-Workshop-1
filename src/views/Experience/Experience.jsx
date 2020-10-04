import React, { useState } from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="timeline-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = useState("Check out some of my experiences!");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="experiences-title">
        <h2>Experiences (a few of them)</h2>
      </div>
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="IChO 2019"
            description="Represented Canada at the 51st International Chemistry Olympiad in Paris, France in July 2019.
            Learned too much about organic synthesis. Enjoyed the hottest heatwave Europe had to offer. 
            Why am I studying math and CS after all that chemistry? I don't know."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="CEMC Lloyd Auckland Workshop"
            description="Invited to spend a week in June 2019 at the University of Waterloo exploring campus and solving some
            tricky math contest problems. Look ma, I've made it to a math camp!"
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="University of Toronto Lab"
            description="With too short a time to make a meaningful project, I spent the summer creating and using some cool microfluidic devices,
            working with some grad students to further their projects and do follow-ups on theses,
            while also doing some cleanup and maintenance. Not much, but honest work."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="Richmond Hill's Youth Action Committee"
            description="The suburb I'm in is pretty dreary... unless when it comes to this! Spent three fun years with friends from across the city planning
            some sweet events, which included begging businesses for sponsorships, getting frostbite while creating Santa Claus Parade floats,
            and making a fool of myself singing The Weeknd during open-mic sessions. Would do again."
            setActiveTitle={setActiveTitle}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background">
          <h2>{activeTitle}</h2>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
