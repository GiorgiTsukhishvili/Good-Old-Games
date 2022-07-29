import { Routes, Route } from "react-router-dom";
import { ModeProvider } from "./context/ModeContext";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

import "./styles/App.css";

function App() {
  return (
    <ModeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ModeProvider>
  );
}

export default App;
