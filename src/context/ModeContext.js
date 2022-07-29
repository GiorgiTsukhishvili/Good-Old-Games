import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [state, setState] = useState(true);

  const changeMode = () => {
    setState((prevState) => !prevState);
  };

  return (
    <ModeContext.Provider value={{ state, changeMode }}>
      {children}
    </ModeContext.Provider>
  );
};
