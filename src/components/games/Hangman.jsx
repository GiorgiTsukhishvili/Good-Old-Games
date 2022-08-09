import React, { useState, useContext } from "react";
import { ModeContext } from "../../context/ModeContext";
import { randomWord } from "../../recourses/hangmanJS/words";
import img0 from "../../recourses/hangmanImages/0.jpg";
import img1 from "../../recourses/hangmanImages/1.jpg";
import img2 from "../../recourses/hangmanImages/2.jpg";
import img3 from "../../recourses/hangmanImages/3.jpg";
import img4 from "../../recourses/hangmanImages/4.jpg";
import img5 from "../../recourses/hangmanImages/5.jpg";
import img6 from "../../recourses/hangmanImages/6.jpg";

import "../../styles/games/Hangman.css";

const Hangman = () => {
  const { state } = useContext(ModeContext);

  const [data] = useState({
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  });

  const [game, setGame] = useState({
    nWrong: 0,
    guessed: new Set(),
    answer: randomWord(),
  });

  const guessedWord = () => {
    return game.answer
      .split("")
      .map((ltr) => (game.guessed.has(ltr) ? ltr : "_"));
  };

  const handleGuess = (evt) => {
    let ltr = evt.target.value;
    setGame((prevGame) => ({
      ...prevGame,
      guessed: prevGame.guessed.add(ltr),
      nWrong: prevGame.nWrong + (prevGame.answer.includes(ltr) ? 0 : 1),
    }));
  };

  const generateButtons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={handleGuess}
        disabled={game.guessed.has(ltr)}
        className="hangman-small-buttons"
      >
        {ltr}
      </button>
    ));
  };

  const reset = () => {
    setGame({ answer: randomWord(), nWrong: 0, guessed: new Set() });
  };

  const gameOver = game.nWrong >= data.maxWrong;
  const altText = `${game.nWrong}/${data.maxWrong} guesses`;

  return (
    <div className={state ? "hangman hangman-light" : "hangman hangman-dark"}>
      <h1 className="hangman-header">Hangman</h1>
      <img
        src={!gameOver ? data.images[game.nWrong] : data.images[6]}
        alt={altText}
        className="hangman-image"
      />

      <p className="Hangramn__wrong">Number of wrong guesses: {game.nWrong}</p>
      <p className="Hangman-word">{!gameOver ? guessedWord() : game.answer}</p>
      <div className="Buttons">
        {game.answer !== guessedWord().join("") ? (
          <p className="Hangman-btns">
            {!gameOver ? generateButtons() : `You lose`}
          </p>
        ) : (
          <p id="Winner">You win!</p>
        )}
        <button id="Hangman__restrat" onClick={reset}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default Hangman;
