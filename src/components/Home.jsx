import React from "react";
import { Link } from "react-router-dom";

import "../styles/home/Home.css";

const Home = () => {
  return (
    <div className="home light2">
      <Link to="/guess-a-number">Guess a Number</Link>
      <Link to="/pig-game">Pig Game</Link>
      <Link to="/rock-paper-scissors">Rock</Link>
    </div>
  );
};

export default Home;
