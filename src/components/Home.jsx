import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModeContext } from "../context/ModeContext";
import { data } from "../recourses/homeJS/homeData";
import { v4 as uuid } from "uuid";

import "../styles/home/Home.css";

const Home = () => {
  const { state } = useContext(ModeContext);

  return (
    <div className={state ? "home home-light" : "home home-dark"}>
      {data.map((el) => {
        return (
          <div className="home-divs" key={uuid()}>
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
