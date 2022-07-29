import React from "react";
import { Link } from "react-router-dom";

import "../styles/home/Home.css";

const Home = () => {
  return (
    <div className="home light2">
      <Link to="/guess-a-number">Guess a Number</Link>
    </div>
  );
};

export default Home;
