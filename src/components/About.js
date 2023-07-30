import React from "react";
import { image } from "../data/user.js"; // Use the relative path to import the image variable

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;