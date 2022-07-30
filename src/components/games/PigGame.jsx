import React, { useEffect, useReducer, useState } from "react";

import dice1 from "../../recourses/pigGameImages/dice-1.png";
import dice2 from "../../recourses/pigGameImages/dice-2.png";
import dice3 from "../../recourses/pigGameImages/dice-3.png";
import dice4 from "../../recourses/pigGameImages/dice-4.png";
import dice5 from "../../recourses/pigGameImages/dice-5.png";
import dice6 from "../../recourses/pigGameImages/dice-6.png";

import "../../styles/games/PigGame.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, currentScore: state.currentScore + action.payload };
    case "LOSS":
      return { ...state, currentScore: 0 };
    case "TOTAL":
      return {
        ...state,
        totalScore: state.totalScore + state.currentScore,
        currentScore: 0,
      };
    case "RESET":
      return { currentScore: 0, totalScore: 0 };
    default:
      return;
  }
};

const reducerTwo = reducer;
const reducerOne = reducer;

const PigGame = () => {
  const [dice, setDice] = useState("");
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(false);
  const [playerOne, dispatchOne] = useReducer(reducerOne, {
    currentScore: 0,
    totalScore: 0,
  });
  const [playerTwo, dispatchTwo] = useReducer(reducerTwo, {
    currentScore: 0,
    totalScore: 0,
  });

  useEffect(() => {
    if (playerOne.totalScore >= 100) {
      setWinner(true);
    } else if (playerTwo.totalScore >= 100) {
      setWinner(true);
    }
  }, [turn]);

  const rollDice = () => {
    const random = Math.floor(Math.random() * 6 + 1);

    switch (random) {
      case 1:
        setDice(dice1);
        {
          turn ? dispatchOne({ type: "LOSS" }) : dispatchTwo({ type: "LOSS" });
        }
        setTurn((prevState) => !prevState);
        break;
      case 2:
        setDice(dice2);
        {
          turn
            ? dispatchOne({ type: "ADD", payload: 2 })
            : dispatchTwo({ type: "ADD", payload: 2 });
        }
        break;
      case 3:
        setDice(dice3);
        {
          turn
            ? dispatchOne({ type: "ADD", payload: 3 })
            : dispatchTwo({ type: "ADD", payload: 3 });
        }
        break;
      case 4:
        setDice(dice4);
        {
          turn
            ? dispatchOne({ type: "ADD", payload: 4 })
            : dispatchTwo({ type: "ADD", payload: 4 });
        }
        break;
      case 5:
        setDice(dice5);
        {
          turn
            ? dispatchOne({ type: "ADD", payload: 5 })
            : dispatchTwo({ type: "ADD", payload: 5 });
        }
        break;
      case 6:
        setDice(dice6);
        {
          turn
            ? dispatchOne({ type: "ADD", payload: 6 })
            : dispatchTwo({ type: "ADD", payload: 6 });
        }
        break;
    }
  };

  const reset = () => {
    dispatchOne({ type: "RESET" });
    dispatchTwo({ type: "RESET" });
    setDice("");
    setWinner(false);
  };

  const hold = () => {
    if (turn) {
      dispatchOne({ type: "TOTAL" });
    } else {
      dispatchTwo({ type: "TOTAL" });
    }
    setTurn((prevState) => !prevState);
  };

  return (
    <div className="pigGame">
      <main className="pigGame-main">
        {winner ? (
          turn ? (
            <h1 className="pigGame-winner">Winner is Player Two</h1>
          ) : (
            <h1 className="pigGame-winner">Winner is Player One</h1>
          )
        ) : (
          ""
        )}
        <section className="player player--0 player--active">
          <h2 className="pigGame-name" id="name--0">
            Player 1
          </h2>
          <p className="pigGame-score" id="score--0">
            {playerOne.totalScore}
          </p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id="current--0">
              {playerOne.currentScore}
            </p>
          </div>
        </section>
        <section className="player player--1">
          <h2 className="pigGame-name" id="name--1">
            Player 2
          </h2>
          <p className="pigGame-score" id="score--1">
            {playerTwo.totalScore}
          </p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id="current--1">
              {playerTwo.currentScore}
            </p>
          </div>
        </section>

        {dice.length !== 0 ? (
          <img src={dice} alt="Playing dice" className="dice" />
        ) : (
          ""
        )}
        <button className="pigGame-btn btn--new" onClick={reset}>
          🔄 New game
        </button>
        <button
          className="pigGame-btn btn--roll"
          onClick={rollDice}
          disabled={winner}
        >
          🎲 Roll dice
        </button>
        <button
          className="pigGame-btn btn--hold"
          onClick={hold}
          disabled={winner}
        >
          📥 Hold
        </button>
      </main>
    </div>
  );
};

export default PigGame;
