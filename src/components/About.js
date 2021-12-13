import React from "react";
import Links from "./Links";

function About(props) {
  const bio = props.bio;

  const render = () => {
    if (!bio) {
      return null;
    } else {
      return <p>{bio}</p>;
    }
  };

  return (
    <div id="about">
      <h2>About Me</h2>
      {render()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
    </div>
  );
}

export default About;
