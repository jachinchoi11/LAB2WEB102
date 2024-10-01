import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Card = ({card, nextCard}) => {
const [showQuestion, setShowQuestion] = useState(true);

const cardFlip = () => {
    setShowQuestion(!showQuestion);
}

useEffect(() => {
    setShowQuestion(true);
}, [card]);

  return (
    <div className="flashcard" >
      <div className="card" onClick={cardFlip}>
        {showQuestion ? <p>{card.Q}</p> : <p>{card.A}</p>}
      </div>
      <button onClick = {nextCard}>Next Card</button>
    </div>
  );
};

export default Card;