import { Routes, Route } from "react-router-dom";
import { ModeProvider } from "./context/ModeContext";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";
import GuessNumber from "./components/games/GuessNumber";

import "./styles/App.css";

function App() {
  return (
    <ModeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/guess-a-number" element={<GuessNumber />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </ModeProvider>
  );
}

export default App;
