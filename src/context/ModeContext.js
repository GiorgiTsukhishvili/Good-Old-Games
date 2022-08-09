import { createContext, useEffect, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [state, setState] = useState(JSON.parse(localStorage.getItem("mode")));

  const changeMode = () => {
    setState((prevState) => !prevState);
  };

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(state));
  }, [state]);

  return (
    <ModeContext.Provider value={{ state, changeMode }}>
      {children}
    </ModeContext.Provider>
  );
};
