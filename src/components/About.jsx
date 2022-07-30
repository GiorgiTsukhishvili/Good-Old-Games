import React, { useContext } from "react";

import { ModeContext } from "../context/ModeContext";

import "../styles/About.css";

const About = () => {
  const { state } = useContext(ModeContext);

  return (
    <div className={state ? "about about-light" : "about about-dark"}>
      <h1 className="about-header">About Good Old Games</h1>
      <p>
        In this application you will be able to enjoy different games, such as:
      </p>
      <p> Pig Game</p>
      <p> Guess a Number</p>
      <p> Rock, Paper, Scissors</p>
      <p>This application is created by Giorgi Tsukhishvili</p>
    </div>
  );
};

export default About;
