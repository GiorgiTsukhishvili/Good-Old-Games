import React, { useState, useRef } from "react";
import "../../styles/games/GuessNumber.css";

const GuessNumber = () => {
  const [number, setNumber] = useState(20);
  const [random, setrandom] = useState(Math.floor(Math.random() * 20 + 1));
  const [text, setText] = useState("Start guessing...");
  const [btnToggle, setBtnToggle] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const numRef = useRef();

  const again = () => {
    setNumber(20);
    setrandom(Math.floor(Math.random() * 20 + 1));
    setBtnToggle(false);
    setText("Start guessing...");
  };

  const check = () => {
    if (numRef.current.value.length === 0) return;

    switch (true) {
      case +numRef.current.value === random:
        setText("You Are Correct!");
        setBtnToggle(true);
        number > highScore && setHighScore(number);
        break;
      case +numRef.current.value < random:
        setText("Too Low Try More!");
        setNumber((prevNumber) => prevNumber - 1);
        break;
      case +numRef.current.value > random:
        setText("Too High Try Less!");
        setNumber((prevNumber) => prevNumber - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className={btnToggle ? "guessnumber winner" : "guessnumber noWinner"}>
      <header className="guessnumber-header-1">
        <h1 className="guessnumber-header">Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again" onClick={again}>
          Again!
        </button>
        <div className="number">?</div>
      </header>
      <div className="guessnumber-main">
        <section className="left">
          <input type="number" className="guess" ref={numRef} />
          <button className="btn check" onClick={check} disabled={btnToggle}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">{text}</p>
          <p className="label-score">
            💯 Score: <span className="score">{number}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highScore}</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default GuessNumber;
