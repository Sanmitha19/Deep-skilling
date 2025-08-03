// src/ListofPlayers.js
import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 85 },
    { name: "Shubman Gill", score: 65 },
    { name: "KL Rahul", score: 50 },
    { name: "Hardik Pandya", score: 40 },
    { name: "Ravindra Jadeja", score: 75 },
    { name: "Rishabh Pant", score: 35 },
    { name: "Jasprit Bumrah", score: 20 },
    { name: "Mohammed Shami", score: 60 },
    { name: "Kuldeep Yadav", score: 30 },
    { name: "Suryakumar Yadav", score: 100 },
  ];

  // Filter players with score below 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
