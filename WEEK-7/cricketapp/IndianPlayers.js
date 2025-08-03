// src/IndianPlayers.js
import React from "react";

const IndianPlayers = () => {
  const oddTeamPlayers = ["Virat", "Hardik", "Jadeja", "Bumrah", "Kuldeep"];
  const evenTeamPlayers = ["Rohit", "Rahul", "Pant", "Shami", "Gill", "Surya"];

  // Destructuring
  const [odd1, odd2, odd3, odd4, odd5] = oddTeamPlayers;
  const [even1, even2, even3, even4, even5, even6] = evenTeamPlayers;

  // Arrays for merging
  const T20players = ["Virat", "Rohit", "Pant"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Saha"];

  // Merge arrays using spread operator
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
        <li>{odd4}</li>
        <li>{odd5}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
        <li>{even4}</li>
        <li>{even5}</li>
        <li>{even6}</li>
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
