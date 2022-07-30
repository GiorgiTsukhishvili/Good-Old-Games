import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModeContext } from "../context/ModeContext";

import image1 from "../recourses/homeImages/img1.PNG";
import image2 from "../recourses/homeImages/img2.PNG";
import image3 from "../recourses/homeImages/img3.PNG";

import "../styles/home/Home.css";

const data = [
  { name: "Rock Paper Scissors", path: "/rock-paper-scissors", img: image3 },
  { name: "Pig Game", path: "/pig-game", img: image2 },
  { name: "Guess a Number", path: "/guess-a-number", img: image1 },
];

const Home = () => {
  const { state } = useContext(ModeContext);

  return (
    <div className={state ? "home home-light" : "home home-dark"}>
      {data.map((el) => {
        return (
          <div className="home-divs">
            <Link to={el.path}>
              <img src={el.img} alt={el.name} className="home-images" />
            </Link>
            <Link to={el.path} className="home-text">
              <p className="home-paragraph">{el.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
