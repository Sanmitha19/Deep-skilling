import React from 'react';
import CalculateScore from './Components/CalculateScore';   // ✅ must match folder/file

export default function App() {
  return (
    <div>
      <h1>Welcome to Score Calculator App</h1>
      <CalculateScore />
    </div>
  );
}
