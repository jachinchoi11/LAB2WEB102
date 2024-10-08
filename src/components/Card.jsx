import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Card = ({card, nextCard, prevCard}) => {
const [showQuestion, setShowQuestion] = useState(true);
const [guess,setGuess] = useState("");
const[correct, setCorrect] = useState("");

const cardFlip = () => {
    setShowQuestion(!showQuestion);
}

useEffect(() => {
    setShowQuestion(true);
    setGuess("");
    setCorrect("");
}, [card]);

const checkSubmit = () => {
  if (guess == card.A) {
    setCorrect("You are correct");
  }
  else {
    setCorrect("You are incorrect");
  }
}


  return (
    <div className="flashcard" >
      <div className="card" onClick={cardFlip}>
        {showQuestion ? <p>{card.Q}</p> : <p>{card.A}</p>}
      </div>
      <div className = "input">
        <input type="text"
        placeholder="Type your guess here"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}/>
        <button onClick = {checkSubmit}>Check</button>
      </div>
      {correct && <p className="correct">{correct}</p>}
      <button onClick = {nextCard}>Next Card</button>
      <button onClick = {prevCard}>Previous Card</button>
    </div>
  );
};

export default Card;