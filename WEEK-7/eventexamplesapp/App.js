import React, { useState } from "react";
import "./App.css";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  const [count, setCount] = useState(0);

  // ➡️ Increments the counter
  const increment = () => {
    setCount(count + 1);
  };

  // ➡️ Decrements the counter
  const decrement = () => {
    setCount(count - 1);
  };

  // ➡️ Function that says hello
  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  // ➡️ Function for the "Say Welcome" button
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // ➡️ Synthetic event button
  const handlePress = () => {
    alert("I was clicked");
  };

  // ➡️ Handles increment button click (multiple methods)
  const handleIncreaseClick = () => {
    increment();
    sayHello();
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>

      {/* Counter Display */}
      <h2>Counter: {count}</h2>

      {/* Buttons */}
      <button onClick={handleIncreaseClick}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      {/* Button with argument */}
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>

      <br /><br />

      {/* Synthetic Event Button */}
      <button onClick={handlePress}>OnPress Event</button>

      <hr />

      {/* Currency Converter Component */}
      <CurrencyConverter />
    </div>
  );
}

export default App;

