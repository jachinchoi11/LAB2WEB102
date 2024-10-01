import { useState } from 'react'
import './App.css'
import Card from "./components/Card";

const flashcards = [
  {Q: "What is the time complexity of inserting an element in a Binary Search Tree (BST)?", A: "The average time complexity is O(log n), but in the worst case (if the tree becomes unbalanced), it can degrade to O(n)."}, 
  {Q:"What is a Linked List?" , A:"A linked list is a linear data structure where elements are stored in nodes, and each node points to the next. Unlike arrays, linked lists don't need contiguous memory."}, 
  {Q:"Explain the difference between depth-first search (DFS) and breadth-first search (BFS)", A:"DFS explores as far as possible along each branch before backtracking (LIFO). BFS explores all the neighbors of a node level by level (FIFO)."}, 
  {Q: "What is the principle of encapsulation in OOP?", A: "Encapsulation is the practice of keeping fields (attributes) within a class private and providing access through public methods to ensure data integrity."}, 
  {Q:" What is the space complexity of a merge sort algorithm?", A:"Merge sort has a space complexity of O(n), due to the additional space required for the temporary arrays used during merging."}, 
  {Q: "What is a stack, and how does it work?", A: " A stack is a LIFO (Last In, First Out) data structure where elements are added and removed from the top. Common operations include push, pop, and peek."}, 
  {Q:" Describe inheritance in object-oriented programming.",A: " Inheritance allows a class (child) to inherit properties and behaviors (methods) from another class (parent), facilitating code reuse and organization."},
  {Q: "What is the difference between a queue and a priority queue?", A: "A queue is FIFO (First In, First Out), while in a priority queue, elements are dequeued based on priority rather than the order they were enqueued."}, 
  {Q: " What is a hash table, and how does it handle collisions?", A:"A hash table is a data structure that maps keys to values using a hash function. Collisions (when two keys map to the same index) are handled using methods like chaining or open addressing."}, 
  {Q: "What is polymorphism in OOP?", A: "Polymorphism allows objects of different classes to be treated as objects of a common parent class, particularly through method overriding and overloading, enabling flexibility in code execution."}
];

function App() {
  const [currentCard, setCurrentCard] = useState(0)

  const nextCard = () => {
    const rand = Math.floor(Math.random() *flashcards.length);
    setCurrentCard(rand);
  };

  return (
      <div className="App">
    <h1>Computer Science Interview Fundamentals</h1>
    <h2>This will test your knowledge on data structures, algorithms and OOP fundamentals.</h2>
    <h2>Number of Flashcards: {flashcards.length}</h2>
      <div className = "card-container">
       <Card card ={flashcards[currentCard]} nextCard = {nextCard}/>
      </div>
    </div>
  )
}

export default App;
