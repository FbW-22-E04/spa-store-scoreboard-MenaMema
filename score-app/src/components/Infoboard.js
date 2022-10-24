import React from "react";
import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";
const Infoboard = () => {
  const { score } = useContext(ScoreContext);
  if (score < 100) {
    return <h3>Let's make it over 100!</h3>;
  } else {
    return <h3>Good job!</h3>;
  }
};
export default Infoboard;
