import React from "react";
import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";

const Scoreboard = () => {
  const { score, plusScore, minusScore } = useContext(ScoreContext);
  return (
    <div>
      <h2>Score Board</h2>
      <h3>Your current score is: {score} </h3>
      <button onClick={plusScore}>+</button>
      <button onClick={minusScore}>-</button>
    </div>
  );
};

export default Scoreboard;
