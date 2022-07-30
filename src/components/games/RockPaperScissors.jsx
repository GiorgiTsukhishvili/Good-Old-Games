import React, { useContext, useEffect, useState } from "react";
import { ModeContext } from "../../context/ModeContext";
import {
  FaRegHandRock,
  FaRegHandPaper,
  FaRegHandScissors,
} from "react-icons/fa";

import "../../styles/games/RockPaperScissors.css";

const RockPaperScissors = () => {
  const { state } = useContext(ModeContext);
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [scores, setScores] = useState({ computer: 0, player: 0 });
  const [toggle, setToggle] = useState(true);

  const computer = () => {
    const rand = Math.floor(Math.random() * 3 + 1);

    switch (rand) {
      case 1:
        return setComputerChoice("Paper");
      case 2:
        return setComputerChoice("Rock");
      case 3:
        return setComputerChoice("Scissors");
      default:
        return;
    }
  };

  const choices = (arg) => {
    computer();
    setPlayerChoice(arg);
    setToggle((prevToggle) => !prevToggle);
  };

  useEffect(() => {
    switch (true) {
      case computerChoice === playerChoice:
        return;
      case computerChoice === "Paper" && playerChoice === "Rock":
        return setScores((prevState) => {
          return { ...prevState, computer: prevState.computer + 1 };
        });
      case computerChoice === "Rock" && playerChoice === "Paper":
        return setScores((prevState) => {
          return { ...prevState, player: prevState.player + 1 };
        });
      case computerChoice === "Scissors" && playerChoice === "Paper":
        return setScores((prevState) => {
          return { ...prevState, computer: prevState.computer + 1 };
        });
      case computerChoice === "Paper" && playerChoice === "Scissors":
        return setScores((prevState) => {
          return { ...prevState, player: prevState.player + 1 };
        });
      case computerChoice === "Scissors" && playerChoice === "Rock":
        return setScores((prevState) => {
          return { ...prevState, player: prevState.player + 1 };
        });
      case computerChoice === "Rock" && playerChoice === "Scissors":
        return setScores((prevState) => {
          return { ...prevState, computer: prevState.computer + 1 };
        });
      default:
        return;
    }
  }, [toggle, computerChoice, playerChoice]);

  return (
    <div
      className={
        state ? "rockPaperScissors rps-light" : "rockPaperScissors rps-dark"
      }
    >
      <h1 className="rps-scores">
        Player: {scores.player} <br />
        Computer: {scores.computer}
      </h1>
      <h1 className="rps-header-one">Plaeyer Choice: {playerChoice}</h1>
      <div>
        <FaRegHandPaper className="rps-icon" onClick={() => choices("Paper")} />
        <FaRegHandRock className="rps-icon" onClick={() => choices("Rock")} />
        <FaRegHandScissors
          className="rps-icon"
          onClick={() => choices("Scissors")}
        />
      </div>
      <div>
        <FaRegHandPaper className="rps-icon" />
        <FaRegHandRock className="rps-icon" />
        <FaRegHandScissors className="rps-icon" />
      </div>
      <h1 className="rps-header-two">Computer Choice: {computerChoice}</h1>
    </div>
  );
};

export default RockPaperScissors;
