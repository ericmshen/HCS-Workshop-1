import React, { useState } from "react";
import "./About.css";
import Profile from "../../assets/profile.png";

const ShowMore = () => {
  const [showMore, setShowMore] = React.useState(false)
  const [clicks, setClicks] = React.useState(0);
  const onClick = () => {
    setShowMore(!showMore); 
    setClicks(clicks+1);
  }
  return (
    <div>
      <input className="showmore" type="submit" value={showMore ? "Show Less" : "Show More"} onClick={onClick} />
      { showMore ? <More text="You have shown more. This is a dummy prop variable."/> : null }
      <p className = "useless">You have clicked this button {clicks} {(clicks == 1) ? "time" : "times"}. This is a dummy state variable.</p>
    </div>
  )
}

function More(props) {
  return (
    <div id="More" className="search-results">
      <p>I'm honestly not a fan of talking about myself, but you can add me on Pokémon Go if you wish:</p>
      <h4>5963 5036 9296</h4>
      <p className="useless">{props.text}</p>
    </div>
  );
}

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={Profile} title="It's not a very flattering photo, I know" className="intro-picture" />
        </div>
        <div className="intro-item">
          <h1>Eric M. Shen</h1>
          <p>I'm a Harvard '24 student currently interested in studying Applied Mathematics, although everything is still 
            up for grabs. As is shown by this project, I'm also currently exploring computer science, which is a rather
            new field for me. When I'm less busy, you can find me biking around (since I'm still stuck in the neighborhood),
            anticipating hitting the slopes, or making fried rice.
          </p>
          <br></br>
          <ShowMore />
        </div>
      </div>
    </div>
  );
}
