import { useState, createContext } from "react";

export const ScoreContext = createContext();

export function ScoreContextProvider({ children }) {
  const [score, setScore] = useState(0);

  const plusScore = () => {
    setScore((prevState) => prevState + 10);
  };
  const minusScore = () => {
    setScore((prevState) => prevState - 10);
  };

  return (
    <ScoreContext.Provider value={{ score, setScore, plusScore, minusScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
