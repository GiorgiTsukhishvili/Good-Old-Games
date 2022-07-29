import React, { useContext } from "react";

import { ModeContext } from "../context/ModeContext";

import "../styles/Error.css";

const Error = () => {
  const { state } = useContext(ModeContext);

  return (
    <div className={state ? "error error-light" : "error error-dark"}>
      <h1 className="error-header">
        404 Not Found, Please Re-Direct to Home Page
      </h1>
    </div>
  );
};

export default Error;
