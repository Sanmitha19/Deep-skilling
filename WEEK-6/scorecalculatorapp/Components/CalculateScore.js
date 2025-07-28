// src/Components/CalculateScore.js
import React, { useState } from 'react';
import '../Stylesheets/mystyle.css';   // ✅ Importing the CSS file

export default function CalculateScore() {
  const [score, setScore] = useState(0);

  return (
    <div className="score-container">
      <h2>Score Calculator</h2>
      <p>Your current score is: {score}</p>
      <button onClick={() => setScore(score + 1)}>Increase Score</button>
      <button onClick={() => setScore(score - 1)}>Decrease Score</button>
    </div>
  );
}
