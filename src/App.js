import React, { useState } from 'react';
import logo from './avatar.png';
import './App.css';

function App() {

  const [showSurprise, setShowSurprise] = useState(false); // State to toggle surprise message

  const handleSurprise = () => {
    setShowSurprise(true); // Update state to show the surprise message
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi! I am Michael Schaar!</h1> {/* Added header */}
        <h2>I am a web designer!</h2> {/* Added subtitle */}
        <p>
         
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <button onClick={handleSurprise}>Click here for a surprise!</button> {/* Added button */}
        {showSurprise && <p>Surprise! You clicked the button!</p>} {/* Conditional rendering of surprise message */}
      </header>
    </div>
  );
}

export default App;
