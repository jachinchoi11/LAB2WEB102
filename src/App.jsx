import { useState } from 'react'
import './App.css'
import Card from "./components/Card";

const flashcards = [
  { Q: "What is the average time complexity of inserting an element in a Binary Search Tree (BST)?", A: "O(log n)" }, 
  { Q: "What is a Linked List?", A: "structure" }, 
  { Q: "Which traversal method explores as far as possible along each branch before backtracking?", A: "DFS" }, 
  { Q: "What is the principle of keeping fields private in OOP?", A: "Encapsulation" }, 
  { Q: "What is the space complexity of the merge sort algorithm?", A: "O(n)" }, 
  { Q: "Which data structure follows the LIFO principle?", A: "Stack" }, 
  { Q: "What is the concept of a child class inheriting properties from a parent class?", A: "Inheritance" }, 
  { Q: "Which data structure follows the FIFO principle?", A: "Queue" }, 
  { Q: "What data structure uses a hash function to map keys to values?", A: "HashTable" }, 
  { Q: "What OOP concept allows objects of different classes to be treated as the same type?", A: "Polymorphism" }
];

function App() {
  const [currentCard, setCurrentCard] = useState(0)

  const nextCard = () => {
    const next = ((prevCard) => (prevCard + 1) % flashcards.length);
    setCurrentCard(next);
  };
  const prevCard = () => {
    const prev = ((prevCard) => (prevCard - 1 + flashcards.length) % flashcards.length);
    setCurrentCard(prev);
  };
  

  return (
      <div className="App">
    <h1>Computer Science Interview Fundamentals</h1>
    <h2>This will test your knowledge on data structures, algorithms and OOP fundamentals.</h2>
    <h2>Number of Flashcards: {flashcards.length}</h2>
      <div className = "card-container">
       <Card card ={flashcards[currentCard]} nextCard = {nextCard} prevCard = {prevCard}/>
      </div>
    </div>
  )
}

export default App;
