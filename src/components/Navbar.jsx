import React, { useContext } from "react";
import { ModeContext } from "../context/ModeContext";
import { Link } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

import "../styles/header/Navbar.css";

const Navbar = () => {
  const { state, changeMode } = useContext(ModeContext);

  return (
    <div className={state ? "header-navbar light" : "header-navbar dark"}>
      <Link to="/" className={state ? "navbar-left-light" : "navbar-left-dark"}>
        GOOD OLD GAMES
      </Link>
      <div>
        <Link
          to="/"
          className={state ? "navbar-right-light" : "navbar-right-dark"}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={state ? "navbar-right-light" : "navbar-right-dark"}
        >
          About
        </Link>

        {state ? (
          <BsSun className="header-icon-sun" onClick={changeMode} />
        ) : (
          <BsMoon className="header-icon-moon" onClick={changeMode} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
